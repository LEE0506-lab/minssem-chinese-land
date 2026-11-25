/* Shared Supabase configuration; public browser key only. */
(function () {
  'use strict';
  if (window.MinssemBackend) return;
  const url = 'https://vonuqedsenhnclxqpwnc.supabase.co';
  const key = 'sb_publishable_dY0_xIWQN2iK6DJIAJ31zg_xdMsDhnl';
  const client = window.supabase?.createClient(url, key);
  window.MinssemBackend = Object.freeze({url, key, client});
})();
