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
(function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.dataset.filter;
      let idx = 0;

      cards.forEach(card => {
        const cat  = card.dataset.category || '';
        const show = f === 'all' || cat.split(' ').includes(f);

        card.classList.toggle('hidden', !show);

        if (show) {
          /* Stagger re-entrance animation */
          card.style.animation = 'none';
          void card.offsetWidth;
          card.style.animation = `fadeUp 0.45s ease ${idx * 0.07}s both`;
          idx++;
        }
      });
    });
  });
})();


/* ─── PRODUCT MODAL ──────────────────────────────────────────── */
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

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    activeId = null;
  }

  /* Open via "View Details" button */
  document.querySelectorAll('.btn-view-detail').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      open(btn.dataset.productId);
    });
  });

  /* Open via card click */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => open(card.dataset.productId));
  });

  /* Close */
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  /* Add to cart from modal */
  addCartBtn.addEventListener('click', () => {
    if (activeId) { addToCart(activeId); close(); }
  });
})();


/* ─── CART ───────────────────────────────────────────────────── */
const cart = [];

function addToCart(productId) {
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (!card) return;

  cart.push({ id: productId, name: card.dataset.name, price: card.dataset.price });
  updateCartBadge();
  showToast(`✦  ${card.dataset.name} added to cart`);
}

function updateCartBadge() {
  const el = document.getElementById('cartCount');
  if (!el) return;
  el.textContent = cart.length;
  el.classList.toggle('show', cart.length > 0);
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

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
