# CodingTest

1. 환경 설정
   1. npx create-react-app codingtest
   2. npm i jsonwebtoken, npm i react-oauth2
   3. 폴더 정리

2. 개발
   1. App.js 수정
   2. Topic.json에 대응하는 인터페이스 생성
   3. 읽어온 Topic.json을 3개마다 slice하여 배열 재생성
   4. 재생성된 배열을 바탕으로 전체 리스트 map하여 생성
   5. filter를 통한 검색 기능 구현
   6. filter를 통한 카테고리 구분 기능 추가
   7. 더블 클릭하여 좋아요 하기 기능 추가
   8. 좋아요 발생 시 API를 호출하여 PATCH 전송
   9. Style, CSS 정리