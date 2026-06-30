/* ============================================================
   LUPI — Maison de Parfums
   Main JavaScript
   ============================================================ */

'use strict';


/* ─── MIST / SCENT-WAVE CANVAS ───────────────────────────────────
   Creates soft floating particle blobs on the hero background,
   simulating rising mist or invisible scent waves.
──────────────────────────────────────────────────────────────── */
(function initMist() {
  const canvas = document.getElementById('mistCanvas');
  if (!canvas) return;

  const ctx   = canvas.getContext('2d');
  let   width, height;
  const particles = [];
  const COUNT = 28;

  /* Color palette: gold, rose, cream — all very translucent */
  const COLORS = ['201,169,110', '196,164,160', '240,235,224', '180,145,90'];

  function resize() {
    width  = canvas.width  = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  class MistParticle {
    constructor(prewarm) {
      this.init(prewarm);
    }

    init(prewarm) {
      this.x     = Math.random() * width;
      this.y     = prewarm ? Math.random() * height : height + Math.random() * 80;
      this.r     = Math.random() * 200 + 70;
      this.vx    = (Math.random() - 0.5) * 0.12;
      this.vy    = -(Math.random() * 0.28 + 0.08);
      this.alpha = 0;
      this.peak  = Math.random() * 0.052 + 0.01;
      this.age   = prewarm ? Math.floor(Math.random() * 400) : 0;
      this.life  = Math.random() * 350 + 200;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    update() {
      this.x   += this.vx;
      this.y   += this.vy;
      this.age++;

      const t = this.age / this.life;
      if      (t < 0.2) this.alpha = (t / 0.2) * this.peak;
      else if (t > 0.75) this.alpha = ((1 - t) / 0.25) * this.peak;
      else               this.alpha = this.peak;

      if (this.age >= this.life || this.y < -this.r) this.init(false);
    }

    draw() {
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, `rgba(${this.color},${this.alpha})`);
      g.addColorStop(1, `rgba(${this.color},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < COUNT; i++) particles.push(new MistParticle(true));
    loop();
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize, { passive: true });
  init();
})();


/* ─── NAVBAR SCROLL BEHAVIOUR ────────────────────────────────── */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function update() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();


/* ─── MOBILE MENU ────────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!toggle) return;

  function close() {
    toggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', close));

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) close();
  });
})();


/* ─── PRODUCT FILTER ─────────────────────────────────────────── */
function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f     = btn.dataset.filter;
      const cards = document.querySelectorAll('#productsGrid .product-card');
      let   idx   = 0;

      cards.forEach(card => {
        const cat  = card.dataset.category || '';
        const show = f === 'all' || cat.split(' ').includes(f);

        card.classList.toggle('hidden', !show);

        if (show) {
          card.style.animation = 'none';
          void card.offsetWidth;
          card.style.animation = `fadeUp 0.45s ease ${idx * 0.07}s both`;
          idx++;
        }
      });
    });
  });
}


/* ─── PRODUCT MODAL ──────────────────────────────────────────── */
let openProductModal; // exposed so dynamically rendered cards can call it

(function initModal() {
  const overlay    = document.getElementById('productModal');
  const closeBtn   = document.getElementById('modalClose');
  const addCartBtn = document.getElementById('modalAddToCart');
  if (!overlay) return;

  let activeId = null;

  function getData(id) {
    const c = document.querySelector(`.product-card[data-product-id="${id}"]`);
    if (!c) return null;
    return {
      id,
      name:        c.dataset.name,
      price:       c.dataset.price,
      description: c.dataset.description,
      topNotes:    c.dataset.topNotes,
      heartNotes:  c.dataset.heartNotes,
      baseNotes:   c.dataset.baseNotes,
      category:    c.querySelector('.product-category-tag')?.textContent || '',
      imageNode:   c.querySelector('.product-img-placeholder')?.cloneNode(true)
                || c.querySelector('.product-image-wrap img')?.cloneNode(true)
                || null,
    };
  }

  function open(id) {
    const d = getData(id);
    if (!d) return;
    activeId = id;

    document.getElementById('modalName').textContent        = d.name;
    document.getElementById('modalPrice').textContent       = d.price;
    document.getElementById('modalDescription').textContent = d.description;
    document.getElementById('modalCategory').textContent    = d.category;
    document.getElementById('modalTopNotes').textContent    = d.topNotes;
    document.getElementById('modalHeartNotes').textContent  = d.heartNotes;
    document.getElementById('modalBaseNotes').textContent   = d.baseNotes;

    const wrap = document.getElementById('modalImageWrap');
    wrap.innerHTML = '';
    if (d.imageNode) wrap.appendChild(d.imageNode);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  openProductModal = open; // expose globally

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    activeId = null;
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  addCartBtn.addEventListener('click', () => {
    if (!activeId) return;
    const d = getData(activeId);
    if (d) {
      LupiCart.add({
        id:       activeId,
        name:     d.name,
        price:    d.price,
        priceNum: parseFloat((d.price || '').replace(/[^\d.]/g, '')) || 0,
        category: d.category
      });
    }
    close();
  });
})();


/* ─── SHARED CARD RENDERER ───────────────────────────────────── */
const CART_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;

function renderProductCard(p, delayClass, catSVG) {
  const badge    = p.badge || p.badge_text ? `<div class="product-badge ${_badgeClass(p.badge || p.badge_text)}">${p.badge || p.badge_text}</div>` : '';
  const imgInner = p.image_url
    ? `<img src="${p.image_url}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:2px">`
    : `<div class="product-img-placeholder" style="--b-color:${p.color||'#C9A96E'};--b-bg:${p.bg||'#0c0a06'}">
         <svg class="bottle-svg" viewBox="0 0 100 170" fill="none" xmlns="http://www.w3.org/2000/svg">
           ${p.bottle_svg || catSVG || ''}
         </svg>
       </div>`;

  return `
    <div class="product-card reveal${delayClass}"
         data-category="${p.category||''}"
         data-product-id="${p.id}"
         data-name="${p.name}"
         data-price="${p.price}"
         data-description="${(p.description||'').replace(/"/g,'&quot;')}"
         data-top-notes="${(p.top_notes||'').replace(/"/g,'&quot;')}"
         data-heart-notes="${(p.heart_notes||'').replace(/"/g,'&quot;')}"
         data-base-notes="${(p.base_notes||'').replace(/"/g,'&quot;')}">
      ${badge}
      <div class="product-image-wrap">
        ${imgInner}
        <div class="product-img-overlay"></div>
      </div>
      <div class="product-info">
        <div class="product-category-tag">${p.category_label||p.categoryLabel||''}</div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${(p.description||'').substring(0,90)}${(p.description||'').length>90?'…':''}</p>
        <div class="product-footer">
          <div class="product-price-group">
            <span class="product-price">${p.price}</span>
            <button class="btn-cart-quick" data-product-id="${p.id}" aria-label="Add to Cart">
              ${CART_ICON}
            </button>
          </div>
          <button class="btn-view-detail" data-product-id="${p.id}" data-i18n="products.viewDetails">View Details</button>
        </div>
      </div>
    </div>`;
}

function _badgeClass(badge) {
  if (!badge) return '';
  const b = badge.toLowerCase();
  if (b.includes('best') || b.includes('seller')) return 'badge-bestseller';
  if (b.includes('limit'))  return 'badge-limited';
  return 'badge-new';
}

function wireReveal(container) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  container.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ─── PERFUMES PANEL (dynamic from DB / fallback) ────────────── */
async function initPerfumes() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let products = null;

  if (typeof LupiDB !== 'undefined') {
    products = await LupiDB.getByType('perfume');
  }

  /* Fall back to static data */
  if (!products || !products.length) {
    products = (typeof PERFUMES_FALLBACK !== 'undefined') ? PERFUMES_FALLBACK : [];
  }

  const DELAYS = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3', ' reveal-delay-4', ' reveal-delay-5'];
  grid.innerHTML = products.map((p, i) => renderProductCard(p, DELAYS[i] || '', '')).join('');

  wireReveal(grid);

  /* wire modal open via card click */
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      if (typeof openProductModal === 'function') openProductModal(card.dataset.productId);
    });
  });
  grid.querySelectorAll('.btn-view-detail').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (typeof openProductModal === 'function') openProductModal(btn.dataset.productId);
    });
  });

  initFilter();
  LupiCart.bindQuickAddButtons();
}


/* ─── CATEGORY TABS ──────────────────────────────────────────── */
(function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  if (!tabs.length) return;

  const CAT_SVG = {
    handsoap: `
      <rect x="47" y="6" width="8" height="3" rx="1.5" fill="var(--b-color)" opacity="0.75"/>
      <rect x="49" y="9" width="4" height="20" rx="2" fill="var(--b-color)" opacity="0.65"/>
      <rect x="38" y="26" width="24" height="12" rx="5" fill="var(--b-color)" opacity="0.85"/>
      <rect x="44" y="38" width="12" height="8" rx="2" fill="var(--b-color)" opacity="0.65"/>
      <rect x="22" y="46" width="56" height="104" rx="12" fill="var(--b-color)" opacity="0.11"/>
      <rect x="28" y="52" width="7" height="82" rx="3.5" fill="white" opacity="0.18"/>
      <rect x="26" y="78" width="48" height="44" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.55"/>
      <line x1="33" y1="96" x2="67" y2="96" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
      <line x1="35" y1="108" x2="65" y2="108" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
      <rect x="22" y="150" width="56" height="6" rx="3" fill="var(--b-color)" opacity="0.28"/>
      <rect x="22" y="46" width="56" height="104" rx="12" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>`,
    roomspray: `
      <rect x="53" y="12" width="22" height="6" rx="3" fill="var(--b-color)" opacity="0.75"/>
      <rect x="60" y="6" width="8" height="18" rx="3" fill="var(--b-color)" opacity="0.85"/>
      <rect x="36" y="16" width="28" height="18" rx="5" fill="var(--b-color)" opacity="0.9"/>
      <rect x="42" y="34" width="16" height="10" rx="2" fill="var(--b-color)" opacity="0.65"/>
      <rect x="28" y="44" width="44" height="110" rx="6" fill="var(--b-color)" opacity="0.12"/>
      <rect x="33" y="50" width="7" height="90" rx="3.5" fill="white" opacity="0.16"/>
      <rect x="30" y="78" width="40" height="50" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.55"/>
      <line x1="36" y1="98" x2="64" y2="98" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
      <line x1="38" y1="112" x2="62" y2="112" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
      <rect x="28" y="154" width="44" height="6" rx="3" fill="var(--b-color)" opacity="0.28"/>
      <rect x="28" y="44" width="44" height="110" rx="6" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>`,
    candle: `
      <path d="M50 18 C47 13 45 9 50 5 C55 9 53 13 50 18Z" fill="var(--b-color)" opacity="0.75"/>
      <path d="M50 22 C48 18 47 14 50 11 C53 14 52 18 50 22Z" fill="var(--b-color)" opacity="0.35"/>
      <line x1="50" y1="22" x2="50" y2="35" stroke="var(--b-color)" stroke-width="1.5" opacity="0.65"/>
      <ellipse cx="50" cy="35" rx="28" ry="5" fill="var(--b-color)" opacity="0.55"/>
      <rect x="20" y="35" width="60" height="112" rx="6" fill="var(--b-color)" opacity="0.12"/>
      <rect x="24" y="40" width="8" height="90" rx="4" fill="white" opacity="0.18"/>
      <rect x="22" y="75" width="56" height="46" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.55"/>
      <line x1="28" y1="94" x2="72" y2="94" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
      <line x1="30" y1="108" x2="70" y2="108" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
      <rect x="20" y="147" width="60" height="8" rx="4" fill="var(--b-color)" opacity="0.28"/>
      <rect x="20" y="35" width="60" height="112" rx="6" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>`
  };

  /* DB type key → HTML grid ID and static fallback key */
  const CAT_MAP = {
    handsoap:   { gridId: 'grid-handsoap',   staticKey: 'handsoap',   dbType: 'handsoap'  },
    roomsprays: { gridId: 'grid-roomsprays',  staticKey: 'roomsprays', dbType: 'roomspray' },
    candles:    { gridId: 'grid-candles',     staticKey: 'candles',    dbType: 'candle'    },
  };

  const DELAYS = ['', ' reveal-delay-1', ' reveal-delay-2', ' reveal-delay-3'];
  const rendered = {};

  async function renderPanel(cat) {
    if (rendered[cat]) return;
    rendered[cat] = true;

    const map  = CAT_MAP[cat];
    const grid = document.getElementById(map.gridId);
    if (!grid) return;

    let products = null;

    if (typeof LupiDB !== 'undefined') {
      products = await LupiDB.getByType(map.dbType);
    }

    /* Fall back to CATEGORY_PRODUCTS static data */
    if (!products || !products.length) {
      const raw = (typeof CATEGORY_PRODUCTS !== 'undefined') ? CATEGORY_PRODUCTS[map.staticKey] || [] : [];
      products  = raw.map(p => ({
        ...p,
        price_num:      p.priceNum,
        category_label: p.categoryLabel,
        top_notes:      p.topNotes,
        heart_notes:    p.heartNotes,
        base_notes:     p.baseNotes,
      }));
    }

    const svgKey = map.dbType; // 'handsoap' | 'roomspray' | 'candle'
    grid.innerHTML = products.map((p, i) =>
      renderProductCard(p, DELAYS[i] || '', CAT_SVG[svgKey] || '')
    ).join('');

    wireReveal(grid);

    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal?.(card.dataset.productId));
    });
    grid.querySelectorAll('.btn-view-detail').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); openProductModal?.(btn.dataset.productId); });
    });

    LupiCart.bindQuickAddButtons();
  }

  function switchTab(cat) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    document.querySelectorAll('.cat-panel').forEach(p => {
      p.classList.toggle('cat-panel-hidden', p.id !== `panel-${cat}`);
    });
    if (cat !== 'perfumes') renderPanel(cat);
  }

  tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.cat)));
})();


/* ─── CART + AUTH + I18N INIT ─────────────────────────────────
   LupiCart, LupiAuth, and LUPI_LANG are loaded from their own
   script files before main.js. Init order matters.
──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  LUPI_LANG.init();
  LupiCart.init();
  await LupiAuth.init();

  /* Inject admin nav link for admin users */
  if (LupiAuth.isAdmin()) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="admin.html" class="nav-link" style="color:var(--gold)">Admin</a>';
      navLinks.appendChild(li);
    }
  }

  /* Load perfumes dynamically (DB or fallback) */
  await initPerfumes();
});


/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  els.forEach(el => io.observe(el));
})();


/* ─── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});


/* ─── FORMS ──────────────────────────────────────────────────── */
(function initForms() {
  /* Newsletter */
  const nForm   = document.getElementById('newsletterForm');
  const nSuccess= document.getElementById('newsletterSuccess');
  if (nForm) {
    nForm.addEventListener('submit', e => {
      e.preventDefault();
      /*
       * REPLACE: Add your newsletter integration here.
       * Example with Mailchimp or Klaviyo:
       *   fetch('https://your-api-endpoint', { method:'POST', body: new FormData(nForm) })
       */
      nForm.style.display = 'none';
      nSuccess.classList.add('show');
    });
  }

  /* Contact */
  const cForm = document.getElementById('contactForm');
  if (cForm) {
    cForm.addEventListener('submit', e => {
      e.preventDefault();
      /*
       * REPLACE: Add your contact form endpoint here.
       * Example with Formspree:
       *   fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(cForm) })
       */
      const btn     = cForm.querySelector('button[type="submit"]');
      const orig    = btn.textContent;
      btn.textContent = 'Message Sent  ✦';
      btn.style.color = 'var(--gold)';
      btn.disabled    = true;
      cForm.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.color = '';
        btn.disabled    = false;
      }, 3200);
    });
  }
})();
