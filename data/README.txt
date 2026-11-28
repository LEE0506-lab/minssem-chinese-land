어휘 데이터 공통 구조

HSK1과 HSK2는 동일한 파일 구성과 같은 데이터 구조를 사용합니다.

실행용: hsk1-vocabulary.js / hsk2-vocabulary.js
검토용: hsk1-vocabulary.json / hsk2-vocabulary.json
단어 수: 사이트 최상위의 mypage-counts-hsk1.json / mypage-counts-hsk2.json

각 급수의 JS와 JSON에 들어 있는 데이터는 같습니다.
JS는 window.MinssemHSK1Vocabulary / window.MinssemHSK2Vocabulary로 제공됩니다.
과 번호 → title, words 순서이며, 모든 words 항목은 아래 필드를 같은 순서로 갖습니다.

hanzi: 중국어
pinyin: 병음
en: 학습 화면에 표시하는 영어 뜻. enOriginal의 문구를 생략 없이 유지합니다.
ko: 영어 뜻에 대응하는 한국어 뜻. 원문의 괄호 설명을 표시할 때 한국어도 대응합니다.
id: 급수·과·수록 순서에 따른 고유 식별자
enOriginal: 변경 전 데이터에 보존된 영어 원문
koOriginal: 이번 구조 통일 전의 한국어 뜻
usageNoteEn: 도감용으로 별도 보존한 영어 용법 설명. 없으면 빈 문자열.
usageNoteKo: 해당 한국어 설명. 없으면 빈 문자열.
partOfSpeech: 확인한 품사. 확인하지 않은 경우 null.
properNoun: 고유명사 여부. 확인하지 않은 경우 null.
source: file / pdfPage / section. 확인하지 않은 각 값은 null.
provenance: existing-site-data 또는 supplied-textbook

내용의 의미와 개수를 동일하게 만드는 것은 아닙니다.
HSK1 기존 15과 327개 / HSK2 교재 15과 214개를 각각 유지합니다.
HSK1 출처 페이지·품사·고유명사 표시는 기존 데이터에 없었으므로 임의로 채우지 않았습니다.
HSK2에서 확인된 교재 출처와 품사 정보는 유지합니다.

뜻 표시 원칙
- 교재의 여러 뜻을 임의로 합치거나 일부만 표시하지 않습니다.
- 의미 구별에 필요한 괄호와 문법 어휘 설명도 표시합니다.
- 이번 수정에서는 영문을 요약하지 않고 보존된 영어 원문 전체를 표시합니다.
- 괄호 설명은 보조 줄로, 핵심 뜻은 별도 강조로 구분하되 모두 보이게 합니다.
- 긴 문장은 글자 크기·줄 간격·행 배치를 조절합니다. 말줄임·더보기로 숨기지 않습니다.
- 의미 표시만 바뀌며 게임 정답 비교에는 동일한 원문 문자열을 사용합니다.
