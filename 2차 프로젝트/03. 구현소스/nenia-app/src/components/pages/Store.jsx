// 스토어 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";

function Store(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap store-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="store" />
    </div>
  );
}

export default Store;
