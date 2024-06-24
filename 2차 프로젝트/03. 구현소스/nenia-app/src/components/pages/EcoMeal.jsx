// 친환경급식 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SquareInfo from "../modules/SquareInfo.jsx";
import SubRight from "../modules/SubRight.jsx";
import SubLast from "../modules/SubLast.jsx";

function EcoMeal(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap ecomeal-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="ecomeal" />

      {/* 섹션1 */}
      <div className="sec1 square-info ">
        {/* 사각정보 모듈 */}
        <SquareInfo catName="ecomeal" />
      </div>

       {/* 섹션2 - 가로스크롤 */}
       <div className="sec2 shorizon-scroll flex">
          <div className="inbox">
            <h1 className="font-2">친환경 급식 가공식품<br /> 어떻게 선택하면 좋을까?</h1>
            {/* 서브가로스크롤 모듈 */}
            <SubRight clsName="ecomeal" />
          </div>
        </div>

      {/* 섹션4 */}
      <div className="sec4 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="ecomeal" />
        </div>
      </div>
    </div>
  );
}

export default EcoMeal;
