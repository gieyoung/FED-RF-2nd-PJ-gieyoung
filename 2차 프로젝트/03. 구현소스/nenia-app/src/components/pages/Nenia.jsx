// 네니아 페이지 컴포넌트 ///
import { useEffect } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import StoreList from "../modules/StoreList.jsx";
import SubLast from "../modules/SubLast.jsx";

// 메인영역 CSS 불러오기
import "../../css/nenia.scss";

// js불러오기
import widthFn from "../func/width_chg.js";

function Nenia(props) {
  useEffect(() => {
    // wayFn();
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap nenia-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="nenia" />
      {/* 섹션1 */}
      <div className="sec1 width-chg">
        <div className="inbox flex">
          <h2 className="font-2">NATURE NEAR, 네니아</h2>
          <p className="font-7">
            네니아는 NATURE NEAR를 합성하여 생성한 말로
            <br /> 순수한 자연과 가까운 안전한 먹거리로 우리 아이들이 푸르고 건강하게 자라나도록 건강하고 좋은 식품을 만들고 있습니다.
            <br /> 우리밀을 비롯한 우리 땅에서 나는 원재료로 첨가물을 최대한 배제하여 안전하게 제조한 친환경 식품을 기획하고 생산합니다.
          </p>
        </div>
      </div>

      {/* 섹션2 - 스토어 상품 소개 */}
      <div className="sec2">
        {/* 스토어리스트 모듈 */}
        <StoreList />
      </div>

      {/* 섹션3 */}
      <div className="sec3 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="nenia" />
        </div>
      </div>
    </div>
  );
}

export default Nenia;
