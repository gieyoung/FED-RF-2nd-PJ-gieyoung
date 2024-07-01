// 회원가입 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SubIntro from "../modules/SubIntro.jsx";

// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

// js불러오기
import widthFn from "../func/width_chg.js";

// 회원가입 CSS 불러오기
import "../../css/member.scss";

function Member(props) {
  useEffect(() => {
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);
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
                  <label>ID : </label>
                  <input type="text" maxLength="20" placeholder="Please enter your ID" />
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
