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
  "도전 모드에서 최고 기록에 도전해 보세요.": "Try to beat your best in Challenge Mode.",
  "부담 없이 반복 연습하세요.": "Practice at your own pace.",
  "개인 최고 기록에 도전하세요!": "Try to beat your personal best!",
  "연습을 마쳤어요! 도전 모드에서 최고 기록에 도전해 보세요.": "Practice complete! Try Challenge Mode to beat your best.",
  "별 보상": "Star Reward",
  "시간 제한": "Time Limit",
  "다음 문제 →": "Next Question →",
  "퀴즈 시작하기": "Start Quiz",
  "이전 단어": "Previous Word",
  "다음 단어": "Next Word"
};
  Object.assign(DICT, {
  "학습한 내용을 원하는 단계부터 복습해 보세요.": "Review what you learned from any stage.",
  "단어 학습 · Vocabulary Learning": "Vocabulary Learning",
  "한자를 보고, 병음을 읽고,": "Look at the characters, read the pinyin,",
  "발음을 따라 해 보세요.": "and repeat the pronunciation.",
  "플래시카드 학습 완료!": "Flashcards Complete!",
  "모든 단어를 복습했어요.": "You reviewed all the words.",
  "이제 스피드 퀴즈에 도전해 보세요!": "Now try the speed quiz!",
  "스피드 퀴즈 시작하기 →": "Start Speed Quiz →",
  "퀴즈 선택으로 돌아가기": "Back to Quiz Selection",
  "단어를 얼마나 잘 기억하고 있는지 확인해 보세요.": "See how well you remember the words.",
  "퀴즈 모드를 선택하세요": "Choose a Quiz Mode",
  "연습 모드로 준비하거나,": "Prepare in Practice Mode,",
  "도전 모드에서 별을 획득할 수 있어요.": "or earn stars in Challenge Mode.",
  "시간제한 없음": "No Time Limit",
  "편안하게 문제를 풀어보세요.": "Answer at your own pace.",
  "별은 지급되지 않아요.": "No stars are awarded.",
  "문제당 15초": "15 Seconds per Question",
  "제한 시간 안에 정답을 선택하세요.": "Choose the correct answer before time runs out.",
  "점수에 따라 최대 별 3개!": "Earn up to 3 stars based on your score!",
  "남은 시간": "Time Remaining",
  "알맞은 정답을 선택하세요.": "Choose the correct answer.",
  "퀴즈 완료!": "Quiz Complete!",
  "이번 학습 결과를 확인해 보세요.": "Check your learning results.",
  "이번 도전에서 획득한 별": "Stars Earned in This Challenge",
  "다른 모드 선택하기": "Choose Another Mode",
  "학습 지도로 돌아가기": "Back to Learning Map",
  "틀린 단어를 다시 확인하고 발음을 들어보세요.": "Review incorrect words and listen to their pronunciation.",
  "틀린 단어 다시 풀기 →": "Retry Incorrect Words →",
  "준비 중인 레슨이에요": "Lesson Coming Soon",
  "아직 이 레슨의 학습 자료가 등록되지 않았어요.": "Learning materials are not available for this lesson yet.",
  "곧 만나요!": "See You Soon!",
  "새로운 단어와 퀴즈가 준비되면": "When new words and quizzes are ready,",
  "이곳에서 학습할 수 있어요.": "you can study them here.",
  "레슨을 찾을 수 없어요": "Lesson Not Found",
  "아직 이 레슨의 단어 자료가 등록되지 않았어요.": "Vocabulary is not available for this lesson yet.",
  "올바른 레슨 번호를 선택해 주세요.": "Please select a valid lesson number.",
  "음성을 지원하지 않는 브라우저예요.": "This browser does not support speech playback.",
  "발음 재생 중...": "Playing pronunciation...",
  "발음을 재생할 수 없어요.": "Unable to play pronunciation.",
  "카드를 눌러 다시 한자만 보기": "Tap to show only the characters again",
  "다음 →": "Next →",
  "학습 기록 저장 중…": "Saving learning record…",
  "학습 기록을 저장했습니다. / Learning record saved.": "Learning record saved.",
  "학습 기록 저장 실패. 로그인 및 연결을 확인하세요. / Record not saved.": "Record not saved. Check your login and connection.",
  "완벽해요! 별 3개를 획득했어요! 🌟": "Perfect! You earned 3 stars! 🌟",
  "정말 잘했어요! 별 2개를 획득했어요!": "Great job! You earned 2 stars!",
  "잘했어요! 별 1개를 획득했어요!": "Well done! You earned 1 star!",
  "조금만 더 연습하면 별을 획득할 수 있어요!": "Keep practicing to earn stars!",
  "도전 모드 완료!": "Challenge Complete!",
  "연습 모드 완료!": "Practice Complete!",
  "이번 도전의 결과를 확인해 보세요.": "Check your challenge results.",
  "연습을 마쳤어요! 도전 모드에서 별을 획득해 보세요.": "Practice complete! Try Challenge Mode to earn stars.",
  "다시 연습하기 →": "Practice Again →",
  "오답 복습 모드": "Incorrect Answer Review",
  "아직 잠겨 있는 레슨이에요 🔒": "This lesson is still locked 🔒",
  "각 구역의 레슨 5개를 완료하면 다음 구역이 열립니다.": "Complete all 5 lessons in an area to unlock the next area.",
  "구역 선택으로 돌아가기": "Back to Area Selection",
  "완료 · 다시 학습 가능": "Completed · Study Again",
  "완료": "Completed",
  "잠금": "Locked",
  "잠김": "Locked",
  "준비 중": "Coming Soon",
  "학습 시작": "Start Learning",
  "구역 완료!": "Area Complete!",
  "HSK 1급의 모든 구역을 완료했어요!": "You completed all HSK Level 1 areas!",
  "축하해요! 다음 구역이 잠금 해제되었어요.": "Congratulations! The next area is unlocked.",
  "다음 구역으로 이동하기 →": "Go to Next Area →",
  "다음 구역 잠금 해제": "Unlock Next Area",
  "HSK 1급 최종 목표": "HSK Level 1 Final Goal",
  "5개 레슨을 모두 완료하면 HSK 1급 학습 여정이 완성됩니다.": "Complete all 5 lessons to finish your HSK Level 1 journey.",
  "HSK 1급": "HSK Level 1",
  "학생 초대 수락": "Accept Student Invitation",
  "로그인": "Log In",
  "관리자 페이지": "Admin Dashboard"
});
  DICT["학습 기록을 저장했습니다."] = "Learning record saved.";
  DICT["학습 기록 저장 실패. 로그인 및 연결을 확인하세요."] = "Record not saved. Check your login and connection.";
  let language = localStorage.getItem(KEY) === "en" ? "en" : "ko";
  const original = new WeakMap();
  function translateText(text) {
    if (language !== "en") return text;
    let out = text;
    out = out.replace(/제(\d+)과 단어 (\d+)개를 모두 살펴봤어요\./g, 'You studied all $2 words in Lesson $1.')
      .replace(/제(\d+)과에서 별을 1개 이상 획득하면 열려요\./g, 'Earn at least one star in Lesson $1 to unlock.')
      .replace(/이 구역에서 (\d+)개 레슨을 더 완료하면 다음 구역으로 나아갈 수 있어요\./g, 'Complete $1 more lessons in this area to unlock the next area.')
      .replace(/(\d+)구역의 (\d+)개 레슨을 완료하면 열립니다\./g, 'Complete all $2 lessons in Area $1 to unlock.')
      .replace(/(\d+)구역 입장하기/g, 'Enter Area $1')
      .replace(/(\d+)개 단어를 처음부터 다시 학습/g, 'Study $1 words again')
      .replace(/(\d+)\s*\/\s*(\d+)문제 정답/g, '$1 / $2 correct')
      .replace(/(\d+) \/ (\d+) 레슨/g, '$1 / $2 lessons')
      .replace(/제(\d+)과 단어 학습/g, 'Lesson $1 Vocabulary')
      .replace(/제(\d+)과/g, 'Lesson $1')
      .replace(/(\d+)개 단어/g, '$1 words')
      .replace(/(\d+)개/g, '$1');
    const normalized = out.trim().replace(/\s+/g, ' ');
    if (DICT[normalized]) return out.replace(out.trim(), DICT[normalized]);
    Object.keys(DICT).sort((a,b) => b.length-a.length).forEach(k => { out = out.split(k).join(DICT[k]); });
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
    document.title = translateText(document.title);
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
