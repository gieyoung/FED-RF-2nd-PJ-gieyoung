// 서브인트로 컴포넌트
import React from "react";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


// 데이터 불러오기
import { subIntroData } from "../data/sub_intro";

// css 불러오기
import "../../css/sub_intro.scss";

// js불러오기
// 가로 사이즈 변하는 js불러오기
import "../func/width_chg.js";

// 뒤에 배경 움직이는 js불러오기
import "../func/back_move.js";

function SubIntro({ catName }) {
  // 불러온 데이터 변수할당
  const selData = subIntroData[catName];

  // 코드 리턴구역 /////////
  return (
    <>
      {/* 서브인트로 뒤 배경이미지  */}
      <div
        className="sub-visual"
        style={{
          backgroundImage: `url(${selData.bakimg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="inbox">
        <div className="txt">
          <h1 className="font-1">{selData.slogan}</h1>
          <p className="font-6">
            {selData.tit} 
            {/* 폰트어썸 사용 */}
            <FontAwesomeIcon icon={faAnglesDown} />
          </p>
        </div>
      </div>
    </>
  );
}

export default SubIntro;
