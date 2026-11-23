/* Shared Korean / English interface localization. */
(function () {
  "use strict";
  const KEY = "minssem-language";
  const DICT = {
  "민쌤중국어 어휘랜드": "Min's Chinese Vocabulary Land",
  "나가기": "Exit",
  "HSK 급수 선택": "Choose HSK Level",
  "새싹 마을": "Sprout Village",
  "하나씩 레슨을 완료하고 새로운 구역을 열어보세요.": "Complete lessons one by one to unlock new areas.",
  "전체 학습 진행률": "Overall Progress",
  "획득한 별": "Stars Earned",
  "학습 구역": "Learning Areas",
  "구역 학습 진행률": "Area Progress",
  "별 1개 이상을 획득하면 해당 레슨이 완료됩니다.": "Earn at least one star to complete a lesson.",
  "레슨마다 최대 3개의 별을 획득할 수 있어요.": "Earn up to three stars per lesson.",
  "새싹의 시작": "The Beginning",
  "성장의 여정": "Journey of Growth",
  "첫 번째 목표": "First Milestone",
  "중국어 학습의 첫걸음을 시작해 보세요.": "Take your first step in learning Chinese.",
  "새로운 표현을 익히며 실력을 키워보세요.": "Build your skills with new expressions.",
  "마지막 구역에 도전해 보세요.": "Take on the final area.",
  "학습 진행률": "Learning Progress",
  "단어 학습": "Vocabulary Learning",
  "플래시카드": "Flashcards",
  "스피드 퀴즈": "Speed Quiz",
  "발음 듣기": "Listen",
  "다음 단어 →": "Next Word →",
  "← 이전": "← Previous",
  "단어 학습 완료 →": "Finish Vocabulary →",
  "단어 학습 완료!": "Vocabulary Complete!",
  "플래시카드 시작하기 →": "Start Flashcards →",
  "최고 기록": "Personal Best",
  "학습 완료": "Completed",
  "어떤 학습을 시작할까요?": "What would you like to study?",
  "한자와 뜻을 빠르게 복습": "Quickly review characters and meanings",
  "연습 또는 도전 모드 선택": "Choose Practice or Challenge mode",
  "이미 획득한 별은 재학습해도 유지돼요.": "Your earned stars stay even when you study again.",
  "학습 단계 선택으로 돌아가기": "Back to Learning Stages",
  "카드를 눌러 뜻과 병음을 확인하세요.": "Tap the card to reveal the meaning and pinyin.",
  "플래시카드 진행률": "Flashcard Progress",
  "카드를 눌러 정답 확인하기": "Tap to reveal the answer",
  "한자 → 뜻": "Characters → Meaning",
  "뜻 → 한자": "Meaning → Characters",
  "중국어 단어의 올바른 뜻을 선택하세요.": "Choose the correct meaning of the Chinese word.",
  "뜻에 알맞은 중국어 단어를 선택하세요.": "Choose the Chinese word matching the meaning.",
  "모두 정답이에요!": "All Correct!",
  "틀린 단어가 없어요.": "No incorrect answers.",
  "정말 잘했어요!": "Great job!",
  "중국어 발음 듣기": "Listen to Chinese pronunciation",
  "잠금 상태": "Locked",
  "구역 다시 둘러보기 →": "Revisit Area →",
  "구역 입장하기 →": "Enter Area →",
  "학습 기록은 현재 브라우저에 저장됩니다.": "Your progress is saved in this browser.",
  "연습 모드": "Practice Mode",
  "도전 모드": "Challenge Mode",
  "정답": "Correct",
  "오답": "Incorrect",
  "다시 도전하기": "Try Again",
  "틀린 단어 복습": "Review Incorrect Words",
  "별 보상": "Star Reward",
  "시간 제한": "Time Limit",
  "다음 문제 →": "Next Question →",
  "퀴즈 시작하기": "Start Quiz",
  "이전 단어": "Previous Word",
  "다음 단어": "Next Word"
};
  let language = localStorage.getItem(KEY) === "en" ? "en" : "ko";
  const original = new WeakMap();
  function translateText(text) {
    if (language !== "en") return text;
    let out = text;
    Object.keys(DICT).sort((a,b) => b.length-a.length).forEach(k => { out = out.split(k).join(DICT[k]); });
    out = out.replace(/(\d+)개 단어를 처음부터 다시 학습/g, 'Study $1 words again')
      .replace(/(\d+)개 단어/g, '$1 words')
      .replace(/(\d+)개/g, '$1')
      .replace(/(\d+)구역의 (\d+)개 레슨을 완료하면 열립니다\./g, 'Complete all $2 lessons in area $1 to unlock.')
      .replace(/(\d+)구역 입장하기/g, 'Enter Area $1')
      .replace(/(\d+) \/ (\d+) 레슨/g, '$1 / $2 lessons');
    return out;
  }
  function updateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.parentElement || node.parentElement.closest('script,style,textarea,option,[data-i18n-ignore]')) return;
      const current = node.nodeValue;
      const prior = original.get(node);
      if (prior !== undefined && current === translateText(prior)) {
        node.nodeValue = translateText(prior); return;
      }
      if (prior !== undefined && current === prior) { node.nodeValue = translateText(prior); return; }
      original.set(node, current); node.nodeValue = translateText(current);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.matches('script,style,textarea,[data-i18n-ignore]')) return;
    for (const child of node.childNodes) updateNode(child);
    for (const attr of ['aria-label','title','placeholder']) {
      if (node.hasAttribute(attr)) {
        const base = node.getAttribute('data-i18n-original-' + attr) || node.getAttribute(attr);
        node.setAttribute('data-i18n-original-' + attr, base);
        node.setAttribute(attr, translateText(base));
      }
    }
  }
  let updating = false;
  function apply() {
    if (updating || !document.body) return;
    updating = true;
    updateNode(document.body);
    document.documentElement.lang = language;
    const select = document.getElementById('minssemLanguage');
    if (select) select.value = language;
    updating = false;
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'ko';
    localStorage.setItem(KEY, language);
    // Re-render page to refresh word meanings and quiz options consistently.
    location.reload();
  }
  function init() {
    const bar = document.querySelector('.topbar');
    if (bar && !document.getElementById('minssemLanguage')) {
      const select = document.createElement('select');
      select.id = 'minssemLanguage'; select.setAttribute('aria-label','Language / 언어');
      select.innerHTML = '<option value="ko">한국어</option><option value="en">English</option>';
      select.value = language; select.addEventListener('change', e => setLanguage(e.target.value));
      select.style.cssText = 'margin-left:auto;margin-right:14px;border:1px solid #dce5df;border-radius:9px;padding:8px;background:white;color:#263b36;font:600 12px inherit;max-width:110px';
      bar.insertBefore(select,bar.lastElementChild);
    }
    apply();
    const observer = new MutationObserver(() => {
      observer.disconnect(); apply(); observer.observe(document.body,{childList:true,subtree:true,characterData:true});
    });
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  window.MinssemI18n = {getLanguage:()=>language,setLanguage,translate:translateText,apply};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
