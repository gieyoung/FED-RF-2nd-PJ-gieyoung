// 회원가입 페이지 컴포넌트 ///
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubIntro from "../modules/SubIntro.jsx";

// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

// js불러오기
import widthFn from "../func/width_chg.js";

// 회원가입 CSS 불러오기
import "../../css/member.scss";

function Member() {
  useEffect(() => {
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);

  // [상태관리변수]
  // [1] 입력요소 상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");

  // [유효성 검사 함수]
  /////////// [아이디 유효성 검사] //////////////////////
  const changeUserId = (e) =>{
    // 입력된 값 읽기
    let val = e.target.value;
    console.log(val);

    // 1. 아이디 유효성 검사식
    const valid = /^[A-Za-z0-9+]{5,}$/;
    // 소문자 5글자 이상이어야 통과
  

    // 2. 에러상태 분기하기
    // 2-1. 에러 아닐때(유효성 검사만 통과한 경우)
    // 유효성 검사방법: 정규식.test(값)
    if(valid.test(val)){
      console.log("통과");
      // 아이디 검사를 위해 기본 데이터 생성호출!(mem_fn.js)
      initData();

      // 중복 아이디 검사 실행
      // 1. 로컬스 변수 할당
      let memData = localStorage.getItem("mem-data");
      console.log(memData);

      // 2. 로컬스 객체 변환 -> 문자형을 배열데이터로 변환
      memData = JSON.parse(memData);
      console.log(memData);

      // 3. 입력데이터의 아이디가 기존 배열값에 있으면 true, 없으면 false
      let isT = memData.some((v) => v.uid === val);
     //val = 현재 입력한 값. v.uid = memData에 저장되어 있는 아이디 값
     // 즉 현재 입력한 값과 로컬스에 있는 아이디 값이 있는지 검사
     console.log("중복아이디 있니?", isT);

     // true일 경우 중복데이터 메시지 표시
     if(isT){
      

     }///if///


  } /// if /////////////////////////

  };
  //////////////// changeUserId 함수 /////////////////



  // 코드리턴구역
  return (
    <>
      {/* // 전체 감싸는 박스 */}
      <div className="member-wrap">
        {/* 서브인트로 모듈 */}
        <SubIntro catName="member" />

        {/* //회원가입 입력 리스트 */}
        <div className="outbx width-chg">
          <section className="membx">
            <h2>Join Us</h2>
            <form action="process.php" method="post">
              <ul>
                <li>
                  {/* 1. 아이디 */}
                  <label>아이디</label>
                  <input type="text" 
                  maxLength="16" 
                  placeholder="아이디를 입력해주세요"
                  // value={userId}
                  onChange={changeUserId} 
                  />
                  <span>(영문소문자/숫자, 4~16자)</span>
                </li>
                <li>
                  <label>Password : </label>
                  <input type="password" maxLength="20" placeholder="Please enter your Password" />
                </li>
                <li>
                  <label>Confirm Password : </label>
                  <input type="password" maxLength="20" placeholder="Please enter your Confirm Password" />
                </li>
                <li>
                  <label>User Name : </label>
                  <input type="text" maxLength="20" placeholder="Please enter your Name" />
                </li>
                <li>
                  <label>Email : </label>
                  <input type="text" maxLength="50" placeholder="Please enter your Email" />
                </li>
                <li style={{ overflow: "hidden" }}>
                  <button className="sbtn">Submit</button>
                </li>
                <li>
                  Are you already a Member?
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Member;
