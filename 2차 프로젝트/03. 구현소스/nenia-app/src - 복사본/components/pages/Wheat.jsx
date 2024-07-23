// 우리밀 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SquareInfo from "../modules/SquareInfo.jsx";
import SubRight from "../modules/SubRight.jsx";
import SubLast from "../modules/SubLast.jsx";

// CSS 불러오기
import "../../css/wheat.scss";

function Wheat(props) {
  return (
    <>
      {/* 전체감싸는 박스 */}
      <div className="sub-wrap wheat-wrap">
        {/* 서브인트로 모듈 */}
        <SubIntro catName="wheat" />

        {/* 섹션1 */}
        <div className="sec1 square-info ">
          {/* 사각정보 모듈 */}
          <SquareInfo catName="wheat" />
        </div>

        {/* 섹션2 */}
        <div className="sec2">
          <div className="inbox">
            <h2 className="font-2">우리밀의 구조</h2>
            <div className="img"></div>
            <img src={`${process.env.PUBLIC_URL}/images/wheat/sec2.jpg`} alt="우리밀의 구조" />
          </div>
        </div>

        {/* 섹션3 - 가로스크롤 */}
        <div className="sec3 shorizon-scroll flex">
          <div className="inbox">
            <h1 className="font-2">우리밀의 건강한 자랑거리</h1>
            {/* 서브가로스크롤 모듈 */}
            <SubRight clsName="wheat" />
          </div>
        </div>

        {/* 섹션4 */}
        <div className="sec4 sub-last">
          <div className="inbox">
            {/* 서브마지막 링크 모듈 */}
            <SubLast clsName="wheat" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wheat;
