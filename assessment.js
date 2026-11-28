/* Assessments remain closed. This page never starts, fetches or submits an assessment. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id),params=new URLSearchParams(location.search);
  const level=params.get('course')==='hsk2'?2:1;
  const requested=Number(params.get('lesson')||1),lesson=Number.isInteger(requested)&&requested>=1&&requested<=15?requested:1;
  let lang=localStorage.getItem('minssem-language')==='en'?'en':'ko';
  function render(){
    const en=lang==='en';document.documentElement.lang=lang;
    $('lang').value=lang;$('title').textContent=en?'Lesson Test':'단원 테스트';
    $('subtitle').textContent=en?`HSK Level ${level} · Lesson ${lesson}`:`HSK ${level}급 · 제${lesson}과`;
    $('back').textContent=en?'← Back to lesson':'← 레슨으로';
    $('back').href=`lesson.html?course=hsk${level}&lesson=${lesson}`;
    $('panel').textContent=en?'Assessment is not open yet.':'정식 평가는 아직 열리지 않았습니다.';
    $('numbers').replaceChildren();
  }
  $('lang').onchange=()=>{lang=$('lang').value;localStorage.setItem('minssem-language',lang);render();};render();
})();
