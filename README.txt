# Git 업로드용 파일 구조

이 폴더 전체를 Git 저장소에 업로드하면 됩니다.

## 핵심 파일
- `index.html` : 첫 화면(인덱스 페이지)
- `pages/hwabeop-53.html` : 제53회 한국화법학회 상세 페이지
- `pages/jakmun-summary.html` : 작문학회 상세 페이지
- `assets/css/style.css` : 공통 스타일
- `assets/img/knue_logo.png` : 학교 마크
- `assets/img/cheongrami.png` : 청라미 이미지
- `assets/docs/hwabeop_schedule.pdf` : 화법학회 일정표
- `assets/docs/hwabeop_proceedings.pdf` : 화법학회 자료집

## Git에 올릴 때
1. 이 폴더 안의 파일과 하위 폴더를 **그대로 유지**하세요.
2. 저장소의 첫 화면 파일은 `index.html`이어야 합니다.
3. 상대경로로 연결되어 있으므로 폴더 이름을 바꾸지 않는 편이 안전합니다.

## 요청 반영 사항
- 첫 화면을 단순화함
- 각 상세 페이지에 `← 자료실 첫 화면으로` 버튼 추가
- `文` 글자 사용 안 함
- `한국교원대학교 국어교육과_최숙기교수님연구실` 표기 적용
- 학교 마크와 청라미 이미지 적극 활용
- 색상은 네이비, 블루, 화이트 중심으로 단순화
