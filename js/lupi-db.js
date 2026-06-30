'use strict';

const LupiDB = (function () {
  const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  let _cache = null;

  /* ── Public: fetch visible products (cached) ─────────────── */
  async function fetchAll() {
    if (_cache) return _cache;
    try {
      const { data, error } = await _sb
        .from('products')
        .select('*')
        .eq('visible', true)
        .order('sort_order', { ascending: true });
      if (error) throw error;
      _cache = data || [];
      return _cache;
    } catch (_) {
      return null; // caller falls back to static data
    }
  }

  async function getByType(type) {
    const all = await fetchAll();
    if (!all) return null;
    return all.filter(p => p.type === type);
  }

  /* find a single product across all loaded data */
  async function getById(id) {
    const all = await fetchAll();
    return (all || []).find(p => p.id === id) || null;
  }

  function invalidateCache() { _cache = null; }

  /* ── Admin: fetch everything including hidden ─────────────── */
  async function fetchAllAdmin() {
    const { data, error } = await _sb
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  /* ── Admin: insert or update ─────────────────────────────── */
  async function upsert(product) {
    const row = { ...product, updated_at: new Date().toISOString() };
    const { error } = await _sb.from('products').upsert(row, { onConflict: 'id' });
    if (error) throw error;
    invalidateCache();
  }

  /* ── Admin: delete ───────────────────────────────────────── */
  async function remove(id) {
    const { error } = await _sb.from('products').delete().eq('id', id);
    if (error) throw error;
    invalidateCache();
  }

  /* ── Admin: toggle visibility ────────────────────────────── */
  async function setVisible(id, visible) {
    const { error } = await _sb
      .from('products')
      .update({ visible, updated_at: new Date().toISOString() })
      .eq('id', id);
    if (error) throw error;
    invalidateCache();
  }

  /* ── Admin: upload product image to Storage ──────────────── */
  async function uploadImage(file, productId) {
    const ext  = file.name.split('.').pop().toLowerCase();
    const path = `${productId}.${ext}`;
    const { error } = await _sb.storage
      .from('product-images')
      .upload(path, file, { upsert: true, contentType: file.type });
    if (error) throw error;
    const { data } = _sb.storage.from('product-images').getPublicUrl(path);
    return data.publicUrl;
  }

  return { fetchAll, getByType, getById, fetchAllAdmin, upsert, remove, setVisible, uploadImage, invalidateCache };
})();
