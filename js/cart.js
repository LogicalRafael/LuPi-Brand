/* ============================================================
   LUPI — Cart
   Persists to localStorage key 'lupi_cart'.
   Injects cart drawer HTML into <body> on init.
   ============================================================ */

'use strict';

const LupiCart = (function () {
  const KEY = 'lupi_cart';
  let items = [];

  /* ── persistence ────────────────────────────────────────── */

  function load() {
    try { items = JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { items = []; }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(items));
    updateBadge();
    renderDrawer();
  }

  /* ── public API ─────────────────────────────────────────── */

  function add(product) {
    /* product: { id, name, price, priceNum, category } */
    const existing = items.find(i => i.id === String(product.id));
    if (existing) {
      existing.qty++;
    } else {
      items.push({ id: String(product.id), name: product.name, price: product.price, priceNum: product.priceNum, qty: 1 });
    }
    save();
    showToast(`✦  ${product.name} ${LUPI_LANG.t('products.addedToCart')}`);
  }

  function remove(id) {
    items = items.filter(i => i.id !== String(id));
    save();
  }

  function updateQty(id, qty) {
    const item = items.find(i => i.id === String(id));
    if (!item) return;
    if (qty <= 0) { remove(id); return; }
    item.qty = qty;
    save();
  }

  function count()    { return items.reduce((s, i) => s + i.qty, 0); }
  function subtotal() { return items.reduce((s, i) => s + (i.priceNum * i.qty), 0); }
  function getItems() { return [...items]; }
  function clear()    { items = []; localStorage.removeItem(KEY); updateBadge(); }

  function formatPrice(n) {
    return `€ ${n % 1 === 0 ? n : n.toFixed(2)}`;
  }

  /* ── badge ──────────────────────────────────────────────── */

  function updateBadge() {
    const el = document.getElementById('cartCount');
    if (!el) return;
    const c = count();
    el.textContent = c;
    el.classList.toggle('show', c > 0);
  }

  /* ── toast ──────────────────────────────────────────────── */

  function showToast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className   = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity 0.4s ease';
      t.style.opacity    = '0';
      setTimeout(() => t.remove(), 440);
    }, 2800);
  }

  /* ── drawer render ──────────────────────────────────────── */

  function renderDrawer() {
    const list      = document.getElementById('cartItemsList');
    const emptyEl   = document.getElementById('cartEmpty');
    const bodyEl    = document.getElementById('cartBody');
    const footerEl  = document.getElementById('cartFooter');
    const subEl     = document.getElementById('cartSubtotal');
    const totEl     = document.getElementById('cartTotal');
    if (!list) return;

    if (items.length === 0) {
      if (emptyEl)  emptyEl.style.display  = 'flex';
      if (bodyEl)   bodyEl.style.display   = 'none';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (emptyEl)  emptyEl.style.display  = 'none';
    if (bodyEl)   bodyEl.style.display   = 'block';
    if (footerEl) footerEl.style.display = 'block';

    const T = key => LUPI_LANG.t(key);

    list.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn qty-down" data-id="${item.id}" aria-label="Decrease">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn qty-up" data-id="${item.id}" aria-label="Increase">+</button>
          <button class="cart-remove" data-id="${item.id}" aria-label="${T('cart.remove')}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    `).join('');

    const sub = subtotal();
    if (subEl) subEl.textContent = formatPrice(sub);
    if (totEl) totEl.textContent = formatPrice(sub);

    list.querySelectorAll('.qty-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const it = items.find(i => i.id === btn.dataset.id);
        if (it) updateQty(btn.dataset.id, it.qty + 1);
      });
    });
    list.querySelectorAll('.qty-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const it = items.find(i => i.id === btn.dataset.id);
        if (it) updateQty(btn.dataset.id, it.qty - 1);
      });
    });
    list.querySelectorAll('.cart-remove').forEach(btn => {
      btn.addEventListener('click', () => remove(btn.dataset.id));
    });
  }

  /* ── drawer open/close ──────────────────────────────────── */

  function openDrawer() {
    const drawer  = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer)  drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderDrawer();
  }

  function closeDrawer() {
    const drawer  = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (drawer)  drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── inject drawer HTML ─────────────────────────────────── */

  function injectDrawer() {
    if (document.getElementById('cartDrawer')) return;
    const T = key => LUPI_LANG.t(key);

    const html = `
      <div id="cartOverlay" class="cart-overlay"></div>
      <div id="cartDrawer" class="cart-drawer" role="dialog" aria-label="${T('cart.title')}">
        <div class="cart-drawer-header">
          <h3 class="cart-drawer-title" data-i18n="cart.title">${T('cart.title')}</h3>
          <button class="cart-drawer-close" id="cartDrawerClose" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div id="cartEmpty" class="cart-empty">
          <div class="cart-empty-icon">◈</div>
          <p data-i18n="cart.empty">${T('cart.empty')}</p>
          <p class="cart-empty-hint" data-i18n="cart.emptyHint">${T('cart.emptyHint')}</p>
          <button class="btn btn-outline cart-continue-empty" data-i18n="cart.continueShopping">${T('cart.continueShopping')}</button>
        </div>
        <div id="cartBody" class="cart-body" style="display:none">
          <div id="cartItemsList" class="cart-items-list"></div>
        </div>
        <div id="cartFooter" class="cart-footer" style="display:none">
          <div class="cart-summary">
            <div class="cart-summary-row">
              <span data-i18n="cart.subtotal">${T('cart.subtotal')}</span>
              <span id="cartSubtotal">—</span>
            </div>
            <div class="cart-summary-row cart-total-row">
              <span data-i18n="cart.total">${T('cart.total')}</span>
              <span id="cartTotal">—</span>
            </div>
          </div>
          <button class="btn btn-primary btn-block" id="cartCheckoutBtn" data-i18n="cart.checkout">${T('cart.checkout')}</button>
          <button class="btn btn-outline btn-block" id="cartContinueFooter" data-i18n="cart.continueShopping">${T('cart.continueShopping')}</button>
        </div>
      </div>`;

    const div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) document.body.appendChild(div.firstChild);
  }

  /* ── bind quick-add buttons ─────────────────────────────── */

  function bindQuickAddButtons() {
    document.querySelectorAll('.btn-cart-quick').forEach(btn => {
      if (btn._lupiCartBound) return;
      btn._lupiCartBound = true;
      btn.addEventListener('click', e => {
        e.stopPropagation(); // prevent card click from opening modal
        const card = btn.closest('.product-card');
        if (!card) return;
        add({
          id:       card.dataset.productId,
          name:     card.dataset.name,
          price:    card.dataset.price,
          priceNum: parseFloat((card.dataset.price || '').replace(/[^\d.]/g, '')) || 0,
        });
      });
    });
  }

  /* ── init ───────────────────────────────────────────────── */

  function init() {
    load();
    injectDrawer();
    updateBadge();

    /* Cart icon opens drawer */
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) cartBtn.addEventListener('click', openDrawer);

    /* Drawer close */
    document.addEventListener('click', e => {
      if (e.target.id === 'cartDrawerClose') closeDrawer();
      if (e.target.id === 'cartOverlay')     closeDrawer();
      if (e.target.closest('.cart-continue-empty')) closeDrawer();
      if (e.target.id === 'cartContinueFooter')     closeDrawer();
    });

    /* Checkout */
    document.addEventListener('click', e => {
      if (e.target.id === 'cartCheckoutBtn') {
        if (items.length === 0) return;
        closeDrawer();
        window.location.href = 'checkout.html';
      }
    });

    bindQuickAddButtons();

    /* Escape key */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  return { init, add, remove, updateQty, count, subtotal, getItems, clear, formatPrice, openDrawer, closeDrawer, showToast, bindQuickAddButtons };
})();
