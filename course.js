/* Course identity is explicit in URLs; no shared storage can switch another tab's course. */
(() => {
  'use strict';
  const value = new URLSearchParams(location.search).get('course');
  const id = value === 'hsk2' || (!value && /\/hsk2\.html$/.test(location.pathname)) ? 'hsk2' : 'hsk1';
  const level = id === 'hsk2' ? 2 : 1;
  function url(path) {
    const u = new URL(path, location.href);
    u.searchParams.set('course', id);
    return u.pathname.split('/').pop() + u.search + u.hash;
  }
  function mountSelector() {
    if (!/\/(mypage|wrong-notes|student-detail|admin)\.html$/.test(location.pathname)) return;
    const host = document.querySelector('main');
    if (!host) return;
    const row = document.createElement('div'); row.className = 'course-picker';
    const label = document.createElement('label'); label.textContent = '코스 / Course ';
    const select = document.createElement('select'); select.setAttribute('aria-label', '코스 / Course');
    ['hsk1','hsk2'].forEach((v,i) => { const o = document.createElement('option'); o.value=v; o.textContent=`HSK ${i+1}`; select.append(o); });
    select.value=id;
    select.onchange=()=>{const u=new URL(location.href);u.searchParams.set('course',select.value);location.href=u.href;};
    label.append(select); row.append(label); host.prepend(row);
  }
  window.MinssemCourse = Object.freeze({id,level,url,countsFile:`mypage-counts-hsk${level}.json`,map:`hsk${level}.html`,reviewTable:level===2?'hsk2_vocabulary_reviews':'vocabulary_reviews'});
  document.addEventListener('DOMContentLoaded', mountSelector);
})();
