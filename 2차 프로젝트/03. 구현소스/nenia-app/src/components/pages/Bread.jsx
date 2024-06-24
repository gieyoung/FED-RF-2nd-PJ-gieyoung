// 네니아브레드 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";

function Bread(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap bread-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="bread" />
    </div>
  );
}

export default Bread;
