'use strict';

const LupiAuth = (function () {

  const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  let currentUser = null; // { id, name, email }

  /* ── session ────────────────────────────────────────────── */

  async function load() {
    const { data: { session } } = await _sb.auth.getSession();
    _applySession(session);

    _sb.auth.onAuthStateChange((_event, session) => {
      _applySession(session);
      updateNavBtn();
    });
  }

  function _applySession(session) {
    if (session?.user) {
      currentUser = {
        id:    session.user.id,
        name:  session.user.user_metadata?.name || session.user.email.split('@')[0],
        email: session.user.email,
        role:  session.user.app_metadata?.role || null,
      };
    } else {
      currentUser = null;
    }
  }

  /* ── auth actions ───────────────────────────────────────── */

  async function register(name, email, password) {
    const { error } = await _sb.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) return { ok: false, error: 'auth.registerError' };
    return { ok: true };
  }

  async function login(email, password) {
    const { error } = await _sb.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: 'auth.loginError' };
    return { ok: true };
  }

  async function logout() {
    await _sb.auth.signOut();
  }

  function getUser()   { return currentUser; }
  function isAdmin()   { return currentUser?.role === 'admin'; }

  /* ── orders (localStorage until a DB table is wired up) ─── */
  /*
   * To move orders to Supabase add an `orders` table:
   *   id uuid, user_id uuid references auth.users, ref text,
   *   total text, date timestamptz, items jsonb
   * Then replace getOrders / saveOrder with:
   *   _sb.from('orders').select('*').eq('user_id', currentUser.id)
   *   _sb.from('orders').insert({ user_id: currentUser.id, ...order })
   */
  const ORDERS_KEY = 'lupi_orders';

  function getOrders() {
    if (!currentUser) return [];
    try {
      const all = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
      return all[currentUser.id] || [];
    } catch (e) { return []; }
  }

  function saveOrder(order) {
    if (!currentUser) return;
    try {
      const all = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
      if (!all[currentUser.id]) all[currentUser.id] = [];
      all[currentUser.id].unshift(order);
      localStorage.setItem(ORDERS_KEY, JSON.stringify(all));
    } catch (e) {}
  }

  /* ── nav button ─────────────────────────────────────────── */

  function updateNavBtn() {
    const btn = document.getElementById('authNavBtn');
    if (!btn) return;
    const T = key => LUPI_LANG.t(key);
    btn.title = currentUser ? T('nav.account') : T('nav.login');
    btn.classList.toggle('auth-logged-in', !!currentUser);
  }

  /* ── modal ──────────────────────────────────────────────── */

  function openModal(view) {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    showView(view || (currentUser ? 'account' : 'login'));
  }

  function closeModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    clearErrors();
  }

  function showView(view) {
    ['login', 'register', 'account'].forEach(v => {
      const el = document.getElementById(`authView-${v}`);
      if (el) el.style.display = (v === view) ? 'block' : 'none';
    });
    document.querySelectorAll('.auth-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.view === view);
    });
    if (view === 'account') renderAccount();
  }

  function renderAccount() {
    const T = key => LUPI_LANG.t(key);
    const nameEl   = document.getElementById('accountName');
    const emailEl  = document.getElementById('accountEmail');
    const ordersEl = document.getElementById('accountOrders');
    if (nameEl  && currentUser) nameEl.textContent  = currentUser.name;
    if (emailEl && currentUser) emailEl.textContent = currentUser.email;
    if (ordersEl) {
      const orders = getOrders();
      ordersEl.innerHTML = orders.length === 0
        ? `<p class="account-no-orders" data-i18n="auth.noOrders">${T('auth.noOrders')}</p>`
        : orders.map(o => `
            <div class="order-history-item">
              <span class="order-ref">${o.ref}</span>
              <span class="order-date">${new Date(o.date).toLocaleDateString()}</span>
              <span class="order-total">${o.total}</span>
            </div>`).join('');
    }
  }

  function clearErrors() {
    document.querySelectorAll('.auth-error').forEach(el => {
      el.textContent = ''; el.style.display = 'none';
    });
  }

  function showError(id, key) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = LUPI_LANG.t(key);
    el.style.display = 'block';
  }

  /* ── inject modal HTML ──────────────────────────────────── */

  function injectModal() {
    if (document.getElementById('authModal')) return;
    const T = key => LUPI_LANG.t(key);

    const html = `
      <div id="authModal" class="modal-overlay auth-modal-overlay" role="dialog" aria-label="${T('auth.account')}">
        <div class="modal-container auth-modal-container">
          <button class="modal-close" id="authModalClose" aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="auth-tabs">
            <button class="auth-tab active" data-view="login"    data-i18n="auth.login">${T('auth.login')}</button>
            <button class="auth-tab"        data-view="register" data-i18n="auth.register">${T('auth.register')}</button>
          </div>

          <!-- Login -->
          <div id="authView-login" class="auth-view">
            <form id="loginForm" class="auth-form" novalidate>
              <div class="auth-field">
                <label data-i18n="auth.email">${T('auth.email')}</label>
                <input type="email" name="email" class="form-input" required autocomplete="email">
              </div>
              <div class="auth-field">
                <label data-i18n="auth.password">${T('auth.password')}</label>
                <input type="password" name="password" class="form-input" required autocomplete="current-password">
              </div>
              <div class="auth-error" id="loginError" style="display:none"></div>
              <button type="submit" class="btn btn-primary btn-block" data-i18n="auth.loginBtn">${T('auth.loginBtn')}</button>
              <p class="auth-switch">
                <span data-i18n="auth.noAccount">${T('auth.noAccount')}</span>
                <a href="#" id="toRegisterLink" data-i18n="auth.registerLink">${T('auth.registerLink')}</a>
              </p>
            </form>
          </div>

          <!-- Register -->
          <div id="authView-register" class="auth-view" style="display:none">
            <form id="registerForm" class="auth-form" novalidate>
              <div class="auth-field">
                <label data-i18n="auth.fullName">${T('auth.fullName')}</label>
                <input type="text" name="name" class="form-input" required autocomplete="name">
              </div>
              <div class="auth-field">
                <label data-i18n="auth.email">${T('auth.email')}</label>
                <input type="email" name="email" class="form-input" required autocomplete="email">
              </div>
              <div class="auth-field">
                <label data-i18n="auth.password">${T('auth.password')}</label>
                <input type="password" name="password" class="form-input" required autocomplete="new-password">
              </div>
              <div class="auth-field">
                <label data-i18n="auth.confirmPassword">${T('auth.confirmPassword')}</label>
                <input type="password" name="confirm" class="form-input" required autocomplete="new-password">
              </div>
              <div class="auth-error" id="registerError" style="display:none"></div>
              <button type="submit" class="btn btn-primary btn-block" data-i18n="auth.registerBtn">${T('auth.registerBtn')}</button>
              <p class="auth-switch">
                <span data-i18n="auth.hasAccount">${T('auth.hasAccount')}</span>
                <a href="#" id="toLoginLink" data-i18n="auth.loginLink">${T('auth.loginLink')}</a>
              </p>
            </form>
          </div>

          <!-- Account -->
          <div id="authView-account" class="auth-view" style="display:none">
            <div class="account-header">
              <div class="account-avatar">◈</div>
              <div>
                <div class="account-name" id="accountName"></div>
                <div class="account-email" id="accountEmail"></div>
              </div>
            </div>
            <div class="account-section">
              <h4 class="account-section-title" data-i18n="auth.orderHistory">${T('auth.orderHistory')}</h4>
              <div id="accountOrders" class="account-orders"></div>
            </div>
            <button class="btn btn-outline btn-block" id="logoutBtn" data-i18n="auth.logout">${T('auth.logout')}</button>
          </div>
        </div>
      </div>`;

    const div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) document.body.appendChild(div.firstChild);
  }

  /* ── init ───────────────────────────────────────────────── */

  async function init() {
    await load();
    injectModal();
    updateNavBtn();

    const authBtn = document.getElementById('authNavBtn');
    if (authBtn) authBtn.addEventListener('click', () => openModal());

    document.getElementById('authModalClose')?.addEventListener('click', closeModal);
    document.getElementById('authModal')?.addEventListener('click', e => {
      if (e.target.id === 'authModal') closeModal();
    });

    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => showView(tab.dataset.view));
    });

    document.getElementById('loginForm')?.addEventListener('submit', async e => {
      e.preventDefault();
      clearErrors();
      const f      = e.target;
      const btn    = f.querySelector('[type=submit]');
      btn.disabled = true;
      const result = await login(f.email.value.trim(), f.password.value);
      btn.disabled = false;
      if (!result.ok) { showError('loginError', result.error); return; }
      updateNavBtn();
      closeModal();
    });

    document.getElementById('registerForm')?.addEventListener('submit', async e => {
      e.preventDefault();
      clearErrors();
      const f   = e.target;
      const btn = f.querySelector('[type=submit]');
      if (f.password.value.length < 6) { showError('registerError', 'auth.passwordShort'); return; }
      if (f.password.value !== f.confirm.value) { showError('registerError', 'auth.passwordMismatch'); return; }
      btn.disabled = true;
      const result = await register(f.name.value.trim(), f.email.value.trim(), f.password.value);
      btn.disabled = false;
      if (!result.ok) { showError('registerError', result.error); return; }
      updateNavBtn();
      showView('account');
    });

    document.getElementById('logoutBtn')?.addEventListener('click', async () => {
      await logout();
      updateNavBtn();
      closeModal();
    });

    document.getElementById('toRegisterLink')?.addEventListener('click', e => { e.preventDefault(); showView('register'); });
    document.getElementById('toLoginLink')?.addEventListener('click',    e => { e.preventDefault(); showView('login'); });

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  return { init, getUser, isAdmin, getOrders, saveOrder, openModal, closeModal, updateNavBtn };
})();
