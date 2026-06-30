/* ============================================================
   LUPI — Product Catalog
   ============================================================
   PRODUCTS_CATALOG: references for the 6 existing products
   (defined as HTML in index.html — IDs must stay in sync).

   NEW_RELEASES: add new entries here to populate the
   /new-releases page. Each product needs:
     id         — unique string, prefix "nr-" recommended
     name       — brand name (not translated)
     price      — display string e.g. "€ 315"
     priceNum   — numeric value for totals
     category   — 'women' | 'men' | 'unisex' (space-separated for multi)
     categoryLabel — visible category tag
     badge      — text shown on card badge
     description, topNotes, heartNotes, baseNotes
     releaseDate — display string e.g. "Jun 2026"
     color      — SVG / accent color hex
     bg         — card background hex
   ============================================================ */

'use strict';

/* Existing products — used for cross-page cart data lookup */
const PRODUCTS_CATALOG = [
  { id: '1', name: 'Lumière Dorée',    price: '€ 289', priceNum: 289, category: 'women'         },
  { id: '2', name: 'Nuit Velours',     price: '€ 245', priceNum: 245, category: 'women'         },
  { id: '3', name: 'Encens Royal',     price: '€ 395', priceNum: 395, category: 'men limited'   },
  { id: '4', name: "Rosée d'Aurore",   price: '€ 189', priceNum: 189, category: 'women'         },
  { id: '5', name: 'Sombre Élégance',  price: '€ 265', priceNum: 265, category: 'men'           },
  { id: '6', name: 'Éclat Absolu',     price: '€ 345', priceNum: 345, category: 'unisex limited'},
];

/* Full perfume data used as fallback when Supabase is unavailable */
const PERFUMES_FALLBACK = [
  {
    id: '1', type: 'perfume', name: 'Lumière Dorée',
    price: '€ 289', price_num: 289, category: 'women',
    category_label: 'Women · Floral Oriental', badge: 'Best Seller',
    description: 'An opulent floral oriental that opens with sparkling bergamot and pink pepper, unfurling into a heart of damascene rose and jasmine sambac, resting on a warm bed of amber and precious woods.',
    top_notes: 'Bergamot, Pink Pepper, Mandarin',
    heart_notes: 'Damascene Rose, Jasmine Sambac, Peony',
    base_notes: 'Amber, Sandalwood, White Musk, Vanilla',
    color: '#C9A96E', bg: '#110e04', sort_order: 0, visible: true,
    bottle_svg: `<rect x="42" y="6" width="16" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
<rect x="38" y="11" width="24" height="16" rx="4" fill="var(--b-color)" opacity="0.9"/>
<rect x="43" y="27" width="14" height="14" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M28 41 C25 52 22 66 20 82 L80 82 C78 66 75 52 72 41 Z" fill="var(--b-color)" opacity="0.15"/>
<rect x="20" y="82" width="60" height="72" rx="5" fill="var(--b-color)" opacity="0.12"/>
<rect x="26" y="88" width="8" height="56" rx="4" fill="white" opacity="0.2"/>
<rect x="32" y="100" width="36" height="38" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="40" y1="124" x2="60" y2="124" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="20" y="154" width="60" height="5" rx="2.5" fill="var(--b-color)" opacity="0.3"/>
<rect x="20" y="41" width="60" height="118" rx="5" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>`,
  },
  {
    id: '2', type: 'perfume', name: 'Nuit Velours',
    price: '€ 245', price_num: 245, category: 'women',
    category_label: 'Women · Woody Floral', badge: 'New',
    description: 'A modern woody floral of seductive depth. Creamy magnolia and violet petals weave through dark patchouli and cedarwood, leaving an intimate, velvety trail that lingers long into the night.',
    top_notes: 'Violet Leaf, Black Currant, Green Fig',
    heart_notes: 'Magnolia, Tuberose, Iris',
    base_notes: 'Dark Patchouli, Cedarwood, Vetiver, Musk',
    color: '#9B7FB6', bg: '#0c080f', sort_order: 1, visible: true,
    bottle_svg: `<rect x="44" y="6" width="12" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
<rect x="36" y="11" width="28" height="18" rx="5" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="29" width="16" height="12" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M22 41 C19 54 17 70 15 88 L85 88 C83 70 81 54 78 41 Z" fill="var(--b-color)" opacity="0.14"/>
<rect x="15" y="88" width="70" height="68" rx="8" fill="var(--b-color)" opacity="0.12"/>
<rect x="22" y="94" width="9" height="54" rx="4.5" fill="white" opacity="0.18"/>
<rect x="28" y="104" width="44" height="36" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="118" x2="64" y2="118" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="128" x2="62" y2="128" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<rect x="15" y="156" width="70" height="5" rx="2.5" fill="var(--b-color)" opacity="0.28"/>
<rect x="15" y="41" width="70" height="120" rx="8" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>`,
  },
  {
    id: '3', type: 'perfume', name: 'Encens Royal',
    price: '€ 395', price_num: 395, category: 'men limited',
    category_label: 'Men · Woody Oriental', badge: 'Limited',
    description: 'A rare oud and incense composition of regal complexity. Sacred resins from the Hadramawt, aged oud from Laos, and cool vetiver create an austere yet magnetic fragrance that commands presence.',
    top_notes: 'Saffron, Elemi Resin, Cardamom',
    heart_notes: 'Laotian Oud, Frankincense, Myrrh',
    base_notes: 'Vetiver, Labdanum, Leather, Ambergris',
    color: '#A07828', bg: '#0c0900', sort_order: 2, visible: true,
    bottle_svg: `<rect x="46" y="4" width="8" height="8" rx="2" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="12" width="16" height="10" rx="3" fill="var(--b-color)" opacity="0.85"/>
<path d="M38 22 L34 42 L66 42 L62 22 Z" fill="var(--b-color)" opacity="0.7"/>
<path d="M20 42 L18 60 L18 155 L82 155 L82 60 L80 42 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="24" y="66" width="7" height="78" rx="3.5" fill="white" opacity="0.13"/>
<rect x="28" y="90" width="44" height="44" rx="3" fill="none" stroke="var(--b-color)" stroke-width="1" opacity="0.6"/>
<line x1="34" y1="106" x2="66" y2="106" stroke="var(--b-color)" stroke-width="0.7" opacity="0.5"/>
<line x1="36" y1="118" x2="64" y2="118" stroke="var(--b-color)" stroke-width="0.5" opacity="0.35"/>
<rect x="18" y="155" width="64" height="6" rx="3" fill="var(--b-color)" opacity="0.38"/>
<path d="M20 42 L18 60 L18 155 L82 155 L82 60 L80 42 Z" fill="none" stroke="var(--b-color)" stroke-width="0.7" opacity="0.28"/>`,
  },
  {
    id: '4', type: 'perfume', name: "Rosée d'Aurore",
    price: '€ 189', price_num: 189, category: 'women',
    category_label: 'Women · Fresh Floral', badge: null,
    description: 'A delicate morning fragrance of fresh florals and translucent dew. Tender petals of freesia and white rose, lit by luminous citrus, over a soft white musk — pure, effortless radiance.',
    top_notes: 'Lemon, Freesia, White Peach',
    heart_notes: 'White Rose, Lily of the Valley, Neroli',
    base_notes: 'White Musk, Cashmeran, Soft Vetiver',
    color: '#D4A8A0', bg: '#120c0b', sort_order: 3, visible: true,
    bottle_svg: `<rect x="43" y="6" width="14" height="6" rx="3" fill="var(--b-color)" opacity="0.8"/>
<path d="M35 12 C34 16 34 20 35 23 L65 23 C66 20 66 16 65 12 Z" fill="var(--b-color)" opacity="0.85"/>
<rect x="42" y="23" width="16" height="16" rx="3" fill="var(--b-color)" opacity="0.7"/>
<ellipse cx="50" cy="112" rx="32" ry="48" fill="var(--b-color)" opacity="0.13"/>
<rect x="30" y="90" width="6" height="40" rx="3" fill="white" opacity="0.2"/>
<ellipse cx="50" cy="112" rx="24" ry="34" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.5"/>
<line x1="38" y1="106" x2="62" y2="106" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
<line x1="40" y1="116" x2="60" y2="116" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<ellipse cx="50" cy="155" rx="32" ry="4" fill="var(--b-color)" opacity="0.22"/>
<ellipse cx="50" cy="112" rx="32" ry="48" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>`,
  },
  {
    id: '5', type: 'perfume', name: 'Sombre Élégance',
    price: '€ 265', price_num: 265, category: 'men',
    category_label: 'Men · Aromatic Fougère', badge: null,
    description: 'Refined masculinity. A crisp aromatic fougère that moves from cool lavender and sharp artemisia into the heart of dark oak moss and tobacco, grounded by rich balsam and a resonant leather accord.',
    top_notes: 'Lavender, Artemisia, Bergamot',
    heart_notes: 'Tobacco, Geranium, Oak Moss',
    base_notes: 'Balsam Fir, Leather, Tonka Bean, Oakwood',
    color: '#5A7A6A', bg: '#04100a', sort_order: 4, visible: true,
    bottle_svg: `<rect x="44" y="4" width="12" height="6" rx="2" fill="var(--b-color)" opacity="0.8"/>
<rect x="36" y="10" width="28" height="14" rx="4" fill="var(--b-color)" opacity="0.9"/>
<rect x="41" y="24" width="18" height="16" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M26 40 L22 60 L22 158 L78 158 L78 60 L74 40 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="28" y="66" width="8" height="82" rx="4" fill="white" opacity="0.14"/>
<rect x="30" y="84" width="40" height="50" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="102" x2="64" y2="102" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="22" y="158" width="56" height="6" rx="2" fill="var(--b-color)" opacity="0.32"/>
<path d="M26 40 L22 60 L22 158 L78 158 L78 60 L74 40 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>`,
  },
  {
    id: '6', type: 'perfume', name: 'Éclat Absolu',
    price: '€ 345', price_num: 345, category: 'unisex limited',
    category_label: 'Unisex · Iris & Musk', badge: 'New',
    description: 'A transcendent unisex creation that blurs all boundaries. Luminous yuzu and raw silk open onto a heart of iris and ambrette seed, dissolving into an airy trail of skin musk and mineral vetiver.',
    top_notes: 'Yuzu, Aldehydes, White Pepper',
    heart_notes: 'Iris, Ambrette Seed, White Cedar',
    base_notes: 'Mineral Vetiver, Skin Musk, Amber',
    color: '#D4C8B0', bg: '#0e0e0c', sort_order: 5, visible: true,
    bottle_svg: `<rect x="47" y="5" width="10" height="7" rx="2" fill="var(--b-color)" opacity="0.8"/>
<path d="M38 12 L36 20 L64 20 L62 12 Z" fill="var(--b-color)" opacity="0.85"/>
<rect x="40" y="20" width="20" height="18" rx="3" fill="var(--b-color)" opacity="0.7"/>
<path d="M28 38 L24 56 L22 92 L22 152 L78 152 L78 92 L76 56 L72 38 Z" fill="var(--b-color)" opacity="0.12"/>
<path d="M28 38 L34 56 L34 152" fill="none" stroke="white" stroke-width="0.5" opacity="0.18"/>
<path d="M72 38 L66 56 L66 152" fill="none" stroke="white" stroke-width="0.3" opacity="0.1"/>
<rect x="30" y="86" width="40" height="44" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="102" x2="64" y2="102" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="22" y="152" width="56" height="6" rx="3" fill="var(--b-color)" opacity="0.28"/>
<path d="M28 38 L24 56 L22 92 L22 152 L78 152 L78 92 L76 56 L72 38 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.3"/>`,
  },
];

/* ── NEW RELEASES ──────────────────────────────────────────
   Add new products here. They appear on new-releases.html
   and also support the shopping cart.
   ────────────────────────────────────────────────────────── */
const NEW_RELEASES = [
  {
    id: 'nr-1',
    name: "Brume d'Ambre",
    price: '€ 315', priceNum: 315,
    category: 'unisex',
    categoryLabel: 'Unisex · Amber Wood',
    badge: 'New Release',
    description: 'A luminous amber cloud drifting over warm vetiver and tonka bean, kissed by neroli and a whisper of white oud. The softest warmth — like sunlight filtered through gauze.',
    topNotes: 'Neroli, Pink Grapefruit, Cardamom',
    heartNotes: 'White Oud, Orris, Heliotrope',
    baseNotes: 'Amber, Tonka Bean, Vetiver, White Musk',
    releaseDate: 'Jun 2026',
    color: '#D4A96E',
    bg: '#0f0a02',
  },
  {
    id: 'nr-2',
    name: 'Fleur de Minuit',
    price: '€ 278', priceNum: 278,
    category: 'women',
    categoryLabel: 'Women · Dark Floral',
    badge: 'New Release',
    description: 'A nocturnal bloom: black rose and damask petals unfurl in the dark, threaded with incense smoke and a trail of obsidian musk. Beauty that only reveals itself at night.',
    topNotes: 'Black Currant, Elemi, Dark Rose',
    heartNotes: 'Damask Rose, Incense, Violet',
    baseNotes: 'Labdanum, Dark Musk, Benzoin, Cedarwood',
    releaseDate: 'May 2026',
    color: '#8A4060',
    bg: '#0d0008',
  },
  {
    id: 'nr-3',
    name: 'Forêt Secrète',
    price: '€ 299', priceNum: 299,
    category: 'men',
    categoryLabel: 'Men · Green Aromatic',
    badge: 'New Release',
    description: 'Crushed pine needles, cold morning air, and the deep earth of an ancient forest floor. A meditation in green — wild, clean, and quietly powerful.',
    topNotes: 'Pine Needle, Galbanum, Bergamot',
    heartNotes: 'Juniper Berry, Petrichor, Clary Sage',
    baseNotes: 'Oakmoss, Fir Balsam, Patchouli, Amber',
    releaseDate: 'Apr 2026',
    color: '#4A7A5A',
    bg: '#020f05',
  },
];

/* SVG bottle paths keyed by product id — for the new-releases page */
const NR_BOTTLE_SVGS = {
  'nr-1': `
    <rect x="44" y="6" width="12" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
    <rect x="36" y="11" width="28" height="18" rx="9" fill="var(--b-color)" opacity="0.9"/>
    <rect x="42" y="29" width="16" height="12" rx="2" fill="var(--b-color)" opacity="0.7"/>
    <ellipse cx="50" cy="110" rx="30" ry="46" fill="var(--b-color)" opacity="0.13"/>
    <rect x="30" y="88" width="6" height="40" rx="3" fill="white" opacity="0.2"/>
    <ellipse cx="50" cy="110" rx="22" ry="32" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.5"/>
    <line x1="38" y1="104" x2="62" y2="104" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
    <line x1="40" y1="114" x2="60" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
    <ellipse cx="50" cy="152" rx="30" ry="4" fill="var(--b-color)" opacity="0.22"/>
    <ellipse cx="50" cy="110" rx="30" ry="46" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>`,
  'nr-2': `
    <rect x="45" y="4" width="10" height="7" rx="2" fill="var(--b-color)" opacity="0.8"/>
    <rect x="37" y="11" width="26" height="20" rx="5" fill="var(--b-color)" opacity="0.9"/>
    <rect x="42" y="31" width="16" height="14" rx="2" fill="var(--b-color)" opacity="0.7"/>
    <path d="M24 45 L20 65 L20 158 L80 158 L80 65 L76 45 Z" fill="var(--b-color)" opacity="0.12"/>
    <rect x="26" y="72" width="7" height="76" rx="3.5" fill="white" opacity="0.15"/>
    <rect x="28" y="90" width="44" height="48" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
    <line x1="34" y1="108" x2="66" y2="108" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
    <line x1="36" y1="120" x2="64" y2="120" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
    <rect x="20" y="158" width="60" height="6" rx="3" fill="var(--b-color)" opacity="0.3"/>
    <path d="M24 45 L20 65 L20 158 L80 158 L80 65 L76 45 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>`,
  'nr-3': `
    <rect x="42" y="4" width="16" height="6" rx="2" fill="var(--b-color)" opacity="0.8"/>
    <rect x="34" y="10" width="32" height="12" rx="3" fill="var(--b-color)" opacity="0.9"/>
    <path d="M34 22 L28 44 L72 44 L66 22 Z" fill="var(--b-color)" opacity="0.7"/>
    <path d="M18 44 L16 62 L16 158 L84 158 L84 62 L82 44 Z" fill="var(--b-color)" opacity="0.12"/>
    <rect x="22" y="70" width="8" height="78" rx="4" fill="white" opacity="0.13"/>
    <rect x="26" y="88" width="48" height="48" rx="2" fill="none" stroke="var(--b-color)" stroke-width="1" opacity="0.55"/>
    <line x1="32" y1="106" x2="68" y2="106" stroke="var(--b-color)" stroke-width="0.7" opacity="0.5"/>
    <line x1="34" y1="118" x2="66" y2="118" stroke="var(--b-color)" stroke-width="0.5" opacity="0.35"/>
    <rect x="16" y="158" width="68" height="6" rx="3" fill="var(--b-color)" opacity="0.32"/>
    <path d="M18 44 L16 62 L16 158 L84 158 L84 62 L82 44 Z" fill="none" stroke="var(--b-color)" stroke-width="0.7" opacity="0.28"/>`,
};


/* ── Category Products ──────────────────────────────────────────
   Used by the category tabs on the main page (index.html).
   The Perfumes tab uses the existing hardcoded HTML cards.
   Add/edit products here; the JS renderer in main.js picks them up.
─────────────────────────────────────────────────────────────── */
const CATEGORY_PRODUCTS = {

  /* ── Hand Soap ─────────────────────────────────────────────── */
  handsoap: [
    {
      id: 'hs-1', name: 'Rose & Shea', price: '€ 28', priceNum: 28,
      color: '#D4B2B0', bg: '#120808',
      categoryLabel: 'Hand Soap · Floral',
      description: 'Indulgent rose water and shea butter for silken, deeply nourished hands.'
    },
    {
      id: 'hs-2', name: 'White Tea & Aloe', price: '€ 24', priceNum: 24,
      color: '#B8C8B0', bg: '#080f08',
      categoryLabel: 'Hand Soap · Fresh',
      description: 'Soothing white tea extract and aloe vera — gentle cleansing, pure radiance.'
    },
    {
      id: 'hs-3', name: 'Oud & Amber', price: '€ 32', priceNum: 32,
      color: '#C9A96E', bg: '#100900',
      categoryLabel: 'Hand Soap · Oriental',
      description: 'A rare liquid soap of rare oud and warm amber — washing hands becomes a ritual.'
    },
    {
      id: 'hs-4', name: 'Jasmine & Milk', price: '€ 26', priceNum: 26,
      color: '#D4C8A0', bg: '#0f0f08',
      categoryLabel: 'Hand Soap · Floral',
      description: 'Jasmine petals and creamy milk proteins — soft hands, lasting floral elegance.'
    }
  ],

  /* ── Room Sprays ────────────────────────────────────────────── */
  roomsprays: [
    {
      id: 'rs-1', name: 'Jasmine Mist', price: '€ 45', priceNum: 45,
      color: '#D4B8C8', bg: '#10080f',
      categoryLabel: 'Home Fragrance · Floral',
      description: 'Fill any space with the ethereal bloom of night-blooming jasmine.'
    },
    {
      id: 'rs-2', name: 'Cedar & Sage', price: '€ 42', priceNum: 42,
      color: '#7A9A7A', bg: '#060f06',
      categoryLabel: 'Home Fragrance · Woody',
      description: 'Grounding cedarwood and crisp sage — clarity and calm in every spray.'
    },
    {
      id: 'rs-3', name: 'Orange Blossom', price: '€ 38', priceNum: 38,
      color: '#D4A870', bg: '#110d04',
      categoryLabel: 'Home Fragrance · Citrus',
      description: 'Sun-drenched orange blossom and luminous citrus to brighten every room.'
    },
    {
      id: 'rs-4', name: 'Oud & Incense', price: '€ 52', priceNum: 52,
      color: '#A07828', bg: '#0c0900',
      categoryLabel: 'Home Fragrance · Oriental',
      description: 'Ancient oud and sacred incense resins — a home fragrance of sovereign presence.'
    }
  ],

  /* ── Candles ────────────────────────────────────────────────── */
  candles: [
    {
      id: 'cn-1', name: 'Vanilla & Amber', price: '€ 65', priceNum: 65,
      color: '#D4A870', bg: '#120c04',
      categoryLabel: 'Scented Candle · Warm',
      description: 'Rich vanilla bean and golden amber — warmth and comfort in every flame.'
    },
    {
      id: 'cn-2', name: 'Rose & Oud', price: '€ 72', priceNum: 72,
      color: '#C4A0A8', bg: '#120808',
      categoryLabel: 'Scented Candle · Floral',
      description: 'Velvety rose petals and deep oud wood — a candle of romantic sophistication.'
    },
    {
      id: 'cn-3', name: 'White Tea & Cedar', price: '€ 58', priceNum: 58,
      color: '#C8C8B8', bg: '#0e0e0c',
      categoryLabel: 'Scented Candle · Fresh',
      description: 'Crisp white tea and warm cedar — effortless, refined, and enduring.'
    },
    {
      id: 'cn-4', name: 'Patchouli & Wood', price: '€ 68', priceNum: 68,
      color: '#8A7A6A', bg: '#0c0a08',
      categoryLabel: 'Scented Candle · Earthy',
      description: 'Earthy patchouli and rich sandalwood — deep, meditative, endlessly calm.'
    }
  ]
};
