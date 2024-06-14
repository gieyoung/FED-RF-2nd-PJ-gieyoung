// 메인가로스크롤 컴포넌트
import React from "react";

// 데이터 불러오기
import { mainRight } from "../data/right_scroll";

function MainRightScroll({ clsName }) {
  // 불러온 데이터 변수할당
  const selData = mainRight[clsName];
  // 코드 리턴구역 /////////
  return (
    
    <li>
      <a href="" className="img_box">
        <img src={selData.img} alt={selData.link} />
      </a>
      <h1 className="font-2">{selData.tit}</h1>
      <div className="btn">
        <a href="" className="po-center">
          {selData.more}
        </a>
      </div>
    </li>
  );
}

export default MainRightScroll;
