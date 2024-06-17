// 슬로건 컴포넌트
import React from "react";

// 가로 스크롤 기능 함수
// import moveSlide from "../func/dance";
// 가로 사이즈 변하는 js불러오기
import "../func/right_scroll.js";

import { Link } from "react-router-dom";

// 슬로건 데이터 불러오기
import { mainRightData } from "../data/main_right";

function MainRight(props) {
  // 코드 리턴구역 /////////
  return (
    <>
      {/* 메인4 데이터 배열로 만들기 */}
      {mainRightData.map((v, i) => (
        <li key={i} className="flex">
          <Link to={v.link} className="img_box" target="_blank">
            <img src={v.img} alt={v.link} />
          </Link>
          <h1 className="font-3">{v.tit}</h1>
          <div className="btn">
            <Link to={v.link} className="po-center">
              바로가기
            </Link>
          </div>
        </li>
      ))}
    </>
  );
}

export default MainRight;
