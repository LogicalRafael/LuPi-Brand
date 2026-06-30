-- ============================================================
-- LUPI — Supabase Setup
-- Run this entire file in: Supabase Dashboard → SQL Editor
-- ============================================================


-- ── 1. Products table ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products (
  id             TEXT PRIMARY KEY,
  type           TEXT NOT NULL,          -- perfume | new_release | handsoap | roomspray | candle
  name           TEXT NOT NULL,
  price          TEXT NOT NULL,          -- display string e.g. "€ 289"
  price_num      NUMERIC NOT NULL,
  category       TEXT,                   -- women / men / unisex / limited (space-separated)
  category_label TEXT,
  badge          TEXT,
  description    TEXT,
  top_notes      TEXT,
  heart_notes    TEXT,
  base_notes     TEXT,
  release_date   TEXT,
  color          TEXT,
  bg             TEXT,
  image_url      TEXT,
  bottle_svg     TEXT,
  sort_order     INT DEFAULT 0,
  visible        BOOLEAN DEFAULT true,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);


-- ── 2. Row Level Security ──────────────────────────────────────
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Anyone (including logged-out visitors) can read visible products
CREATE POLICY "public read"
  ON products FOR SELECT
  USING (visible = true);

-- Admins can do everything (read including hidden, write, delete)
CREATE POLICY "admin all"
  ON products FOR ALL
  USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  WITH CHECK ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');


-- ── 3. Storage bucket ─────────────────────────────────────────
-- Run this separately in Dashboard → Storage → New bucket:
--   Name: product-images
--   Public: YES
--
-- Then add these storage policies in Dashboard → Storage → product-images → Policies:
--
-- Policy 1 — Public read:
--   Name: public read
--   Allowed operation: SELECT
--   Target roles: (leave blank = all roles including anon)
--   Policy: true
--
-- Policy 2 — Admin write:
--   Name: admin write
--   Allowed operations: INSERT, UPDATE, DELETE
--   Target roles: authenticated
--   Policy: (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'


-- ── 4. Seed: Perfumes ─────────────────────────────────────────
INSERT INTO products (id, type, name, price, price_num, category, category_label, badge, description, top_notes, heart_notes, base_notes, color, bg, sort_order, visible, bottle_svg) VALUES

('1', 'perfume', 'Lumière Dorée', '€ 289', 289, 'women', 'Women · Floral Oriental', 'Best Seller',
 'An opulent floral oriental that opens with sparkling bergamot and pink pepper, unfurling into a heart of damascene rose and jasmine sambac, resting on a warm bed of amber and precious woods.',
 'Bergamot, Pink Pepper, Mandarin', 'Damascene Rose, Jasmine Sambac, Peony', 'Amber, Sandalwood, White Musk, Vanilla',
 '#C9A96E', '#110e04', 0, true,
 '<rect x="42" y="6" width="16" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
<rect x="38" y="11" width="24" height="16" rx="4" fill="var(--b-color)" opacity="0.9"/>
<rect x="43" y="27" width="14" height="14" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M28 41 C25 52 22 66 20 82 L80 82 C78 66 75 52 72 41 Z" fill="var(--b-color)" opacity="0.15"/>
<rect x="20" y="82" width="60" height="72" rx="5" fill="var(--b-color)" opacity="0.12"/>
<rect x="26" y="88" width="8" height="56" rx="4" fill="white" opacity="0.2"/>
<rect x="32" y="100" width="36" height="38" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="40" y1="124" x2="60" y2="124" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="20" y="154" width="60" height="5" rx="2.5" fill="var(--b-color)" opacity="0.3"/>
<rect x="20" y="41" width="60" height="118" rx="5" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>'),

('2', 'perfume', 'Nuit Velours', '€ 245', 245, 'women', 'Women · Woody Floral', 'New',
 'A modern woody floral of seductive depth. Creamy magnolia and violet petals weave through dark patchouli and cedarwood, leaving an intimate, velvety trail that lingers long into the night.',
 'Violet Leaf, Black Currant, Green Fig', 'Magnolia, Tuberose, Iris', 'Dark Patchouli, Cedarwood, Vetiver, Musk',
 '#9B7FB6', '#0c080f', 1, true,
 '<rect x="44" y="6" width="12" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
<rect x="36" y="11" width="28" height="18" rx="5" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="29" width="16" height="12" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M22 41 C19 54 17 70 15 88 L85 88 C83 70 81 54 78 41 Z" fill="var(--b-color)" opacity="0.14"/>
<rect x="15" y="88" width="70" height="68" rx="8" fill="var(--b-color)" opacity="0.12"/>
<rect x="22" y="94" width="9" height="54" rx="4.5" fill="white" opacity="0.18"/>
<rect x="28" y="104" width="44" height="36" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="118" x2="64" y2="118" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="128" x2="62" y2="128" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<rect x="15" y="156" width="70" height="5" rx="2.5" fill="var(--b-color)" opacity="0.28"/>
<rect x="15" y="41" width="70" height="120" rx="8" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>'),

('3', 'perfume', 'Encens Royal', '€ 395', 395, 'men limited', 'Men · Woody Oriental', 'Limited',
 'A rare oud and incense composition of regal complexity. Sacred resins from the Hadramawt, aged oud from Laos, and cool vetiver create an austere yet magnetic fragrance that commands presence.',
 'Saffron, Elemi Resin, Cardamom', 'Laotian Oud, Frankincense, Myrrh', 'Vetiver, Labdanum, Leather, Ambergris',
 '#A07828', '#0c0900', 2, true,
 '<rect x="46" y="4" width="8" height="8" rx="2" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="12" width="16" height="10" rx="3" fill="var(--b-color)" opacity="0.85"/>
<path d="M38 22 L34 42 L66 42 L62 22 Z" fill="var(--b-color)" opacity="0.7"/>
<path d="M20 42 L18 60 L18 155 L82 155 L82 60 L80 42 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="24" y="66" width="7" height="78" rx="3.5" fill="white" opacity="0.13"/>
<rect x="28" y="90" width="44" height="44" rx="3" fill="none" stroke="var(--b-color)" stroke-width="1" opacity="0.6"/>
<line x1="34" y1="106" x2="66" y2="106" stroke="var(--b-color)" stroke-width="0.7" opacity="0.5"/>
<line x1="36" y1="118" x2="64" y2="118" stroke="var(--b-color)" stroke-width="0.5" opacity="0.35"/>
<rect x="18" y="155" width="64" height="6" rx="3" fill="var(--b-color)" opacity="0.38"/>
<path d="M20 42 L18 60 L18 155 L82 155 L82 60 L80 42 Z" fill="none" stroke="var(--b-color)" stroke-width="0.7" opacity="0.28"/>'),

('4', 'perfume', 'Rosée d''Aurore', '€ 189', 189, 'women', 'Women · Fresh Floral', NULL,
 'A delicate morning fragrance of fresh florals and translucent dew. Tender petals of freesia and white rose, lit by luminous citrus, over a soft white musk — pure, effortless radiance.',
 'Lemon, Freesia, White Peach', 'White Rose, Lily of the Valley, Neroli', 'White Musk, Cashmeran, Soft Vetiver',
 '#D4A8A0', '#120c0b', 3, true,
 '<rect x="43" y="6" width="14" height="6" rx="3" fill="var(--b-color)" opacity="0.8"/>
<path d="M35 12 C34 16 34 20 35 23 L65 23 C66 20 66 16 65 12 Z" fill="var(--b-color)" opacity="0.85"/>
<rect x="42" y="23" width="16" height="16" rx="3" fill="var(--b-color)" opacity="0.7"/>
<ellipse cx="50" cy="112" rx="32" ry="48" fill="var(--b-color)" opacity="0.13"/>
<rect x="30" y="90" width="6" height="40" rx="3" fill="white" opacity="0.2"/>
<ellipse cx="50" cy="112" rx="24" ry="34" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.5"/>
<line x1="38" y1="106" x2="62" y2="106" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
<line x1="40" y1="116" x2="60" y2="116" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<ellipse cx="50" cy="155" rx="32" ry="4" fill="var(--b-color)" opacity="0.22"/>
<ellipse cx="50" cy="112" rx="32" ry="48" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>'),

('5', 'perfume', 'Sombre Élégance', '€ 265', 265, 'men', 'Men · Aromatic Fougère', NULL,
 'Refined masculinity. A crisp aromatic fougère that moves from cool lavender and sharp artemisia into the heart of dark oak moss and tobacco, grounded by rich balsam and a resonant leather accord.',
 'Lavender, Artemisia, Bergamot', 'Tobacco, Geranium, Oak Moss', 'Balsam Fir, Leather, Tonka Bean, Oakwood',
 '#5A7A6A', '#04100a', 4, true,
 '<rect x="44" y="4" width="12" height="6" rx="2" fill="var(--b-color)" opacity="0.8"/>
<rect x="36" y="10" width="28" height="14" rx="4" fill="var(--b-color)" opacity="0.9"/>
<rect x="41" y="24" width="18" height="16" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M26 40 L22 60 L22 158 L78 158 L78 60 L74 40 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="28" y="66" width="8" height="82" rx="4" fill="white" opacity="0.14"/>
<rect x="30" y="84" width="40" height="50" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="102" x2="64" y2="102" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="22" y="158" width="56" height="6" rx="2" fill="var(--b-color)" opacity="0.32"/>
<path d="M26 40 L22 60 L22 158 L78 158 L78 60 L74 40 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>'),

('6', 'perfume', 'Éclat Absolu', '€ 345', 345, 'unisex limited', 'Unisex · Iris & Musk', 'New',
 'A transcendent unisex creation that blurs all boundaries. Luminous yuzu and raw silk open onto a heart of iris and ambrette seed, dissolving into an airy trail of skin musk and mineral vetiver.',
 'Yuzu, Aldehydes, White Pepper', 'Iris, Ambrette Seed, White Cedar', 'Mineral Vetiver, Skin Musk, Amber',
 '#D4C8B0', '#0e0e0c', 5, true,
 '<rect x="47" y="5" width="10" height="7" rx="2" fill="var(--b-color)" opacity="0.8"/>
<path d="M38 12 L36 20 L64 20 L62 12 Z" fill="var(--b-color)" opacity="0.85"/>
<rect x="40" y="20" width="20" height="18" rx="3" fill="var(--b-color)" opacity="0.7"/>
<path d="M28 38 L24 56 L22 92 L22 152 L78 152 L78 92 L76 56 L72 38 Z" fill="var(--b-color)" opacity="0.12"/>
<path d="M28 38 L34 56 L34 152" fill="none" stroke="white" stroke-width="0.5" opacity="0.18"/>
<path d="M72 38 L66 56 L66 152" fill="none" stroke="white" stroke-width="0.3" opacity="0.1"/>
<rect x="30" y="86" width="40" height="44" rx="2" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="36" y1="102" x2="64" y2="102" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="38" y1="114" x2="62" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.35"/>
<rect x="22" y="152" width="56" height="6" rx="3" fill="var(--b-color)" opacity="0.28"/>
<path d="M28 38 L24 56 L22 92 L22 152 L78 152 L78 92 L76 56 L72 38 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.3"/>');


-- ── 5. Seed: New Releases ─────────────────────────────────────
INSERT INTO products (id, type, name, price, price_num, category, category_label, badge, description, top_notes, heart_notes, base_notes, color, bg, release_date, sort_order, visible, bottle_svg) VALUES

('nr-1', 'new_release', 'Brume d''Ambre', '€ 315', 315, 'unisex', 'Unisex · Amber Wood', 'New Release',
 'A luminous amber cloud drifting over warm vetiver and tonka bean, kissed by neroli and a whisper of white oud. The softest warmth — like sunlight filtered through gauze.',
 'Neroli, Pink Grapefruit, Cardamom', 'White Oud, Orris, Heliotrope', 'Amber, Tonka Bean, Vetiver, White Musk',
 '#D4A96E', '#0f0a02', 'Jun 2026', 0, true,
 '<rect x="44" y="6" width="12" height="5" rx="2.5" fill="var(--b-color)" opacity="0.8"/>
<rect x="36" y="11" width="28" height="18" rx="9" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="29" width="16" height="12" rx="2" fill="var(--b-color)" opacity="0.7"/>
<ellipse cx="50" cy="110" rx="30" ry="46" fill="var(--b-color)" opacity="0.13"/>
<rect x="30" y="88" width="6" height="40" rx="3" fill="white" opacity="0.2"/>
<ellipse cx="50" cy="110" rx="22" ry="32" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.5"/>
<line x1="38" y1="104" x2="62" y2="104" stroke="var(--b-color)" stroke-width="0.6" opacity="0.45"/>
<line x1="40" y1="114" x2="60" y2="114" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<ellipse cx="50" cy="152" rx="30" ry="4" fill="var(--b-color)" opacity="0.22"/>
<ellipse cx="50" cy="110" rx="30" ry="46" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.25"/>'),

('nr-2', 'new_release', 'Fleur de Minuit', '€ 278', 278, 'women', 'Women · Dark Floral', 'New Release',
 'A nocturnal bloom: black rose and damask petals unfurl in the dark, threaded with incense smoke and a trail of obsidian musk. Beauty that only reveals itself at night.',
 'Black Currant, Elemi, Dark Rose', 'Damask Rose, Incense, Violet', 'Labdanum, Dark Musk, Benzoin, Cedarwood',
 '#8A4060', '#0d0008', 'May 2026', 1, true,
 '<rect x="45" y="4" width="10" height="7" rx="2" fill="var(--b-color)" opacity="0.8"/>
<rect x="37" y="11" width="26" height="20" rx="5" fill="var(--b-color)" opacity="0.9"/>
<rect x="42" y="31" width="16" height="14" rx="2" fill="var(--b-color)" opacity="0.7"/>
<path d="M24 45 L20 65 L20 158 L80 158 L80 65 L76 45 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="26" y="72" width="7" height="76" rx="3.5" fill="white" opacity="0.15"/>
<rect x="28" y="90" width="44" height="48" rx="3" fill="none" stroke="var(--b-color)" stroke-width="0.8" opacity="0.6"/>
<line x1="34" y1="108" x2="66" y2="108" stroke="var(--b-color)" stroke-width="0.6" opacity="0.5"/>
<line x1="36" y1="120" x2="64" y2="120" stroke="var(--b-color)" stroke-width="0.4" opacity="0.3"/>
<rect x="20" y="158" width="60" height="6" rx="3" fill="var(--b-color)" opacity="0.3"/>
<path d="M24 45 L20 65 L20 158 L80 158 L80 65 L76 45 Z" fill="none" stroke="var(--b-color)" stroke-width="0.6" opacity="0.28"/>'),

('nr-3', 'new_release', 'Forêt Secrète', '€ 299', 299, 'men', 'Men · Green Aromatic', 'New Release',
 'Crushed pine needles, cold morning air, and the deep earth of an ancient forest floor. A meditation in green — wild, clean, and quietly powerful.',
 'Pine Needle, Galbanum, Bergamot', 'Juniper Berry, Petrichor, Clary Sage', 'Oakmoss, Fir Balsam, Patchouli, Amber',
 '#4A7A5A', '#020f05', 'Apr 2026', 2, true,
 '<rect x="42" y="4" width="16" height="6" rx="2" fill="var(--b-color)" opacity="0.8"/>
<rect x="34" y="10" width="32" height="12" rx="3" fill="var(--b-color)" opacity="0.9"/>
<path d="M34 22 L28 44 L72 44 L66 22 Z" fill="var(--b-color)" opacity="0.7"/>
<path d="M18 44 L16 62 L16 158 L84 158 L84 62 L82 44 Z" fill="var(--b-color)" opacity="0.12"/>
<rect x="22" y="70" width="8" height="78" rx="4" fill="white" opacity="0.13"/>
<rect x="26" y="88" width="48" height="48" rx="2" fill="none" stroke="var(--b-color)" stroke-width="1" opacity="0.55"/>
<line x1="32" y1="106" x2="68" y2="106" stroke="var(--b-color)" stroke-width="0.7" opacity="0.5"/>
<line x1="34" y1="118" x2="66" y2="118" stroke="var(--b-color)" stroke-width="0.5" opacity="0.35"/>
<rect x="16" y="158" width="68" height="6" rx="3" fill="var(--b-color)" opacity="0.32"/>
<path d="M18 44 L16 62 L16 158 L84 158 L84 62 L82 44 Z" fill="none" stroke="var(--b-color)" stroke-width="0.7" opacity="0.28"/>');


-- ── 6. Seed: Hand Soaps ───────────────────────────────────────
INSERT INTO products (id, type, name, price, price_num, category, category_label, description, color, bg, sort_order, visible) VALUES
('hs-1', 'handsoap', 'Rose & Shea',       '€ 28', 28, 'women', 'Hand Soap · Floral',   'Indulgent rose water and shea butter for silken, deeply nourished hands.',           '#D4B2B0', '#120808', 0, true),
('hs-2', 'handsoap', 'White Tea & Aloe',  '€ 24', 24, 'unisex','Hand Soap · Fresh',    'Soothing white tea extract and aloe vera — gentle cleansing, pure radiance.',         '#B8C8B0', '#080f08', 1, true),
('hs-3', 'handsoap', 'Oud & Amber',       '€ 32', 32, 'unisex','Hand Soap · Oriental', 'A rare liquid soap of rare oud and warm amber — washing hands becomes a ritual.',     '#C9A96E', '#100900', 2, true),
('hs-4', 'handsoap', 'Jasmine & Milk',    '€ 26', 26, 'women', 'Hand Soap · Floral',   'Jasmine petals and creamy milk proteins — soft hands, lasting floral elegance.',      '#D4C8A0', '#0f0f08', 3, true);


-- ── 7. Seed: Room Sprays ──────────────────────────────────────
INSERT INTO products (id, type, name, price, price_num, category, category_label, description, color, bg, sort_order, visible) VALUES
('rs-1', 'roomspray', 'Jasmine Mist',    '€ 45', 45, 'women', 'Home Fragrance · Floral',   'Fill any space with the ethereal bloom of night-blooming jasmine.',                      '#D4B8C8', '#10080f', 0, true),
('rs-2', 'roomspray', 'Cedar & Sage',    '€ 42', 42, 'unisex','Home Fragrance · Woody',    'Grounding cedarwood and crisp sage — clarity and calm in every spray.',                  '#7A9A7A', '#060f06', 1, true),
('rs-3', 'roomspray', 'Orange Blossom',  '€ 38', 38, 'unisex','Home Fragrance · Citrus',   'Sun-drenched orange blossom and luminous citrus to brighten every room.',                '#D4A870', '#110d04', 2, true),
('rs-4', 'roomspray', 'Oud & Incense',   '€ 52', 52, 'unisex','Home Fragrance · Oriental', 'Ancient oud and sacred incense resins — a home fragrance of sovereign presence.',        '#A07828', '#0c0900', 3, true);


-- ── 8. Seed: Candles ──────────────────────────────────────────
INSERT INTO products (id, type, name, price, price_num, category, category_label, description, color, bg, sort_order, visible) VALUES
('cn-1', 'candle', 'Vanilla & Amber',  '€ 65', 65, 'unisex', 'Scented Candle · Warm',   'Rich vanilla bean and golden amber — warmth and comfort in every flame.',                '#D4A870', '#120c04', 0, true),
('cn-2', 'candle', 'Rose & Oud',       '€ 72', 72, 'women',  'Scented Candle · Floral',  'Velvety rose petals and deep oud wood — a candle of romantic sophistication.',          '#C4A0A8', '#120808', 1, true),
('cn-3', 'candle', 'White Tea & Cedar','€ 58', 58, 'unisex', 'Scented Candle · Fresh',   'Crisp white tea and warm cedar — effortless, refined, and enduring.',                   '#C8C8B8', '#0e0e0c', 2, true),
('cn-4', 'candle', 'Patchouli & Wood', '€ 68', 68, 'unisex', 'Scented Candle · Earthy',  'Earthy patchouli and rich sandalwood — deep, meditative, endlessly calm.',              '#8A7A6A', '#0c0a08', 3, true);
