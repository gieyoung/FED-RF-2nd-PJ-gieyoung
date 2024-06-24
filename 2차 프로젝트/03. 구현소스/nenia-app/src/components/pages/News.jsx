// 네니아소식 컴포넌트 ///
import React from 'react';
import SubIntro from "../modules/SubIntro.jsx";

function News(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap news-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="news" />
    </div>
  );
}

export default News;