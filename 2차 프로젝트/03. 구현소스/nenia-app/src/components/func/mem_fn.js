// 회원가입을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 회원가입 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 아이디 : uid
    3. 비밀번호 : pwd
    4. 사용자이름 : unm
    5. 이메일 : eml
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("mem-data") === null) {
    localStorage.setItem(
      "mem-data",
      `
        [
            {
                "idx": "1",
                "uid":"admin",
                "pwd":"1234",
                "unm":"최고관리자",
                "eml":"admin@naver.com"
            },
            {
                "idx": "2",
                "uid":"poohlee23",
                "pwd":"1234",
                "unm":"운영자",
                "eml":"poohlee23@naver.com"
            }
        ]
    `
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };
