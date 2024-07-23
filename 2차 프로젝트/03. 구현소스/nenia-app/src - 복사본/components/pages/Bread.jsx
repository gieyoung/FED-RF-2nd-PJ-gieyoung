// 네니아브레드 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SquareInfo from "../modules/SquareInfo.jsx";
import SubLast from "../modules/SubLast.jsx";


function Bread(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap bread-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="bread" />

      {/* 섹션1 */}
      <div className="sec1 square-info ">
        {/* 사각정보 모듈 */}
        <SquareInfo catName="bread" />
      </div>

      {/* 섹션2 */}
      <div className="sec2 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="bread" />
        </div>
      </div>
    </div>
  );
}

export default Bread;
