// 친환경급식 페이지 컴포넌트 ///
import { useEffect } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SquareInfo from "../modules/SquareInfo.jsx";
import SubRight from "../modules/SubRight.jsx";
import StoreList from "../modules/StoreList.jsx";
import SubLast from "../modules/SubLast.jsx";

// CSS 불러오기
import "../../css/eco_meal.scss";

// js불러오기
import backMoveFn from "../func/back_move.js";

function EcoMeal(props) {
  useEffect(() => {
    // 움직이는 배경 함수 호출
    backMoveFn();
  }, []);
  //// 코드 리턴구역 //////////////
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
          <h1 className="font-2">
            친환경 급식 가공식품
            <br /> 어떻게 선택하면 좋을까?
          </h1>
          {/* 서브가로스크롤 모듈 */}
          <SubRight clsName="ecomeal" />
        </div>
      </div>

      {/* 섹션3 - 움직이는 배경이미지 */}
      <div className="sec3 back-move">
        <div className="txt-box">
          <h1 className="font-2">
            그렇다면, 우리는 <br /> 무엇을 먹어야 할까요?
          </h1>
          <p className="font-6 nanum">
            학교급식 시장에서 5가지 주요 상품군들의 구매 비중 가운데 가공식품이 차지하는 비중은 약40%로 <br />
            적지 않습니다. 우리가 친환경 무상급식을 실현하기 위해 1차 농수축산물을 친환경으로 구매해도 <br /> 수입산, 화학적 합성 첨가물로 가득한 부재료들, 소스들로 버무려서 먹는다면 친환경 농산물을 먹는 <br /> 의미와 가치가 상실될 것입니다. 그렇기에
            가공식품을 명확한 선정기준을 가지고 선택하는 것이 <br />
            우리 아이들의 급식을 보다 더 안전하고 건강하게 만들 수 있는 지름길인 것을 잊지 않아야합니다. <br />
            건강하고 안전한 학교급식은 가장 기초적인 교육이라고 생각합니다. <br />
            우리들의 100년 미래를 만드는 초석입니다.
          </p>
        </div>
      </div>

      {/* 섹션4 - 스토어 상품 소개 */}
      <div className="sec4">
          {/* 스토어리스트 모듈 */}
          <StoreList />
      </div>

      {/* 섹션5 */}
      <div className="sec5 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="ecomeal" />
        </div>
      </div>
    </div>
  );
}

export default EcoMeal;
