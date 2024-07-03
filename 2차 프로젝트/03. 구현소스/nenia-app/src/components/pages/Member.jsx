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

  // [2] 에러상태관리 변수
  // -> 에러 상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);



  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = ["최소 5글자 이상 입력하세요", "이미 사용중인 아이디입니다", "사용 가능한 아이디 입니다"];

  // [3]에러 메시지 상태변수 : 초기값 msgId[0]
  const [idMsg, setIdMsg] = useState(msgId[0]);

  // [유효성 검사 함수]
  /////////// [아이디 유효성 검사] //////////////////////
  const changeUserId = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;
    // console.log(val);

    // 1. 아이디 유효성 검사식
    const valid = /^[a-z0-9+]{5,}$/;
    // 소문자 5글자 이상이어야 통과

    // 2. 에러상태 분기하기
    // 2-1. 에러 아닐때(유효성 검사만 통과한 경우)
    // 유효성 검사방법: 정규식.test(값)
    if (valid.test(val)) {
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
      if (isT) {
        // 에러 메시지 업데이트
        setIdMsg(msgId[1]);
      //  "이미 사용중인 아이디입니다"
        // 에러 상태값 업데이트: 에러임(true)
        setUserIdError(true);
      } ///if///
      // false일 경우 성공메시지 표시: 에러가 아님(false)
      else{
        setUserIdError(false);
      }///else///
    } /// if /////////////////////////

    // 2-2. 에러일때(유효성 검사 불통과)
    else{

    
      console.log("에러");
      // 에러 메시지 업데이트
      setIdMsg(msgId[0]);
      //"최소 5글자 이상 입력하세요"
      // 에러 상태값 업데이트: 에러임(true)
      setUserIdError(true);
    }////////else/////////

  
    

    // userId 상태변수값이 업데이트 되어야 화면에 출력된다.
    setUserId(val);

  };
  //////////////// changeUserId 함수 /////////////////

  // [ 전체 유효성 검사 체크 함수]
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일 때 에러상태값 업데이트
    if (!userId) setUserIdError(true);

    // 2. 통과시 true, 불통과시 false리턴처리
    // 통과조건 -> 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      !userIdError
      ) return true;
    // 하나라도 false이면 false를 리턴함
    else return false;
  }; ////////totalValid함수//////////

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
                  <input
                    type="text"
                    maxLength="16"
                    placeholder="아이디를 입력해주세요"
                    value={userId}
                    onChange={changeUserId}
                  />
                  {
                    // 에러일 경우 메시지 출력
                    userIdError && (
                      <div className="msg">
                        <small
                          style={{
                            color: "red",
                            fontSize: "10px",
                          }}
                        >
                          {idMsg}
                          {/* "최소 5글자 이상 입력하세요" 또는 "이미 사용중인 아이디입니다", */}
                        </small>
                      </div>
                    )
                  }
                  {
                    // 에러 아닐 때 메시지 출력
                    !userIdError && userId && (
                      <div className="msg">
                        <small
                          style={{
                            color: "green",
                            fontSize: "10px",
                          }}
                        >
                          {msgId[2]}
                      
                          {/* "사용 가능한 아이디 입니다" */}
                        </small>
                      </div>
                    )
                  }
                  <span>(영문소문자/숫자, 5~16자)</span>
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
