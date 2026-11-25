/* Shared authentication helpers. Authorization remains enforced by Supabase RLS. */
(function () {
  'use strict';
  const client = window.MinssemBackend.client;
  const getUser = () => client.auth.getUser();
  const getSession = () => client.auth.getSession();
  const signOut = () => client.auth.signOut();
  async function getProfile(id) {
    const result = await client.from('profiles').select('id, display_name, role').eq('id', id).maybeSingle();
    return result;
  }
  function isAdmin(profile) { return profile?.role === 'admin'; }
  async function hasAdminAccess() {
    const {data, error} = await getUser();
    if (error || !data?.user) return false;
    const result = await getProfile(data.user.id);
    return !result.error && isAdmin(result.data);
  }
  window.MinssemAuth = Object.freeze({getUser, getSession, signOut, getProfile, isAdmin, hasAdminAccess});
})();
