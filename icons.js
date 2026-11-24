(()=>{
const icons={
'📖':['M12 7v14M3 4h4a5 5 0 0 1 5 3 5 5 0 0 1 5-3h4v15h-4a5 5 0 0 0-5 2 5 5 0 0 0-5-2H3z','#e5f3ec','#417c69'],
'🗂️':['m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5','#e6eef9','#5279b5'],
'⚡':['m13 2-9 12h7l-1 8 10-12h-7z','#fff2d9','#a36b13'],
'📋':['M9 4H5v18h14V4h-4M9 2h6v5H9zM8 14l3 3 5-6','#e5ece9','#4b6b60'],
'🔒':['M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4','#e9eeeb','#687b72'],
'🌱':['M12 22v-9M12 16C3 16 2 8 3 5c7 0 9 4 9 8M12 13c0-7 4-10 9-10 0 7-3 10-9 10','#e5f3ec','#417c69'],
'🌿':['M4 20 19 5M7 17C1 8 9 3 21 3c0 12-5 20-14 14z','#e5f3ec','#417c69'],
'🌳':['M12 22v-7M8 17H6a4 4 0 0 1-1-8 7 7 0 0 1 14 0 4 4 0 0 1-1 8h-2','#e5f3ec','#417c69'],
'⛰️':['m2 20 8-15 5 9 3-5 4 11z','#efe8f8','#8b6bb5'],
'🏔️':['m2 20 9-17 11 17zM7 10l4 3 4-3','#e6eef9','#5279b5'],
'🏆':['M7 3h10v7a5 5 0 0 1-10 0zM7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4M12 15v5M7 21h10','#faeed2','#a67b24'],
'📗':['M5 3h15v18H5a3 3 0 0 1 0-6h15M5 3a3 3 0 0 0-3 3v12','#e5f3ec','#417c69'],
'🎓':['m2 9 10-5 10 5-10 5zM6 11v6q6 5 12 0v-6M22 9v7','#e6eef9','#5279b5'],
'🌏':['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2c-6 5-6 15 0 20 6-5 6-15 0-20','#e0f2f4','#388a96'],
'🎉':['m3 21 5-14 9 9zM14 3l1 4M20 4l-3 5M21 11l-4 1','#faeed2','#a67b24'],
'🌟':['m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z','#faeed2','#a67b24'],
'🔊':['M3 9h4l5-5v16l-5-5H3zM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14','#e5f3ec','#417c69'],
'›':['m9 5 7 7-7 7','#e5f3ec','#687b72']};
function run(){for(const el of document.querySelectorAll('.stage-choice-icon,.stage-choice-arrow,.course-icon,.icon,.mode-icon')){const key=el.textContent.trim(),v=icons[key];if(!v||el.children.length)continue;const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','ui-icon');svg.setAttribute('aria-hidden','true');const p=document.createElementNS(svg.namespaceURI,'path');p.setAttribute('d',v[0]);svg.append(p);el.replaceChildren(svg);if(!el.matches('.stage-choice-arrow')){el.classList.add('ui-tone');el.style.setProperty('--icon-bg',v[1]);el.style.setProperty('--icon-fg',v[2]);}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();})();
