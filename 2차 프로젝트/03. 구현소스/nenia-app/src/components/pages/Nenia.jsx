// 네니아 페이지 컴포넌트 ///
import { useEffect } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SquareInfo from "../modules/SquareInfo.jsx";
import StoreList from "../modules/StoreList.jsx";
import SubLast from "../modules/SubLast.jsx";

// 메인영역 CSS 불러오기
import "../../css/nenia.scss";

// js불러오기
import widthFn from "../func/width_chg.js";
import neniaFn from "../func/nenia.js";

function Nenia(props) {
  useEffect(() => {
    neniaFn();
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap nenia-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="nenia" />

      {/* 섹션1 */}
      <div className="sec4 square-info ">
        {/* 사각정보 모듈 */}
        <SquareInfo catName="nenia" />
      </div>

      {/* 섹션2 */}
      <div className="sec2">
        <div className="inbox">
          <div className="wrap">
            {/* 왼쪽 텍스트 영역 */}
            <div className="left">
              <ul>
                <li className="only-m">
                  <img src={`${process.env.PUBLIC_URL}/images/nenia/bak.jpg`} alt="" />
                </li>
                <li>
                  <h1 className="font-2">
                    네니아는 더 나은 <br />
                    <span>
                      사회가치를 공유하고자 <br />
                      노력합니다.
                    </span>
                  </h1>
                  <p className="font-6">
                    네니아는 자연에 대한 존경과 인간에 대한 신뢰에 기반하여 삶을 구체적으로 <br /> 개선하는 것에 이바지 하고자 하는 기업 정신에 같이 있고자 합니다. 그 추동력은 <br />
                    사회문화 전체에 대한 이해와 인식의 역량을 함양하고자 합니다. 그리고 연구하고 <br />
                    개척하며 나은 삶을 창출하는 것에 같이 있고자 합니다.
                    <br />
                    <br />
                    네니아는 비록 작은 기업이지만 생태계 훼손을 막고자 하는 노력들에 <br />
                    함께 있고자 합니다. 깨끗한 대기와 물, 건강한 먹을거리를 위한 토양의 <br />
                    보존과 생태적인 농법을 지키고자 하는 농민들과 이를 지지하는 <br />
                    시민들의 뜻에 보다 집중된 태도로 동참합니다.
                  </p>
                </li>
                <li>
                  <h1 className="font-2">
                    <span>
                      네니아가 <br />
                      옹호하는 것
                    </span>
                  </h1>
                  <p className="font-6">
                    네니아는 자연에 대한 존경과 인간에 대한 신뢰에 기반하여 삶을 구체적으로 <br />
                    개선하는 것에 이바지하고자 하는 기업 정신에 같이 있고자 합니다. <br />
                    <br />
                    그 추동력은 사회문화 전체에 대한 이해와 인식의 역량을 함양하고, <br />
                    연구하고 개척하며 나은 삶을 창출하는 것에 같이 있고자 합니다. <br />
                    <br />
                    네니아는 비록 작은 기업이지만 생태계 훼손을 막고자 하는 노력들로 <br />
                    깨끗한 대기와 물, 건강한 먹을거리를 위한 토양의 보존과 <br />
                    생태적인 농법을 지키고자 하는 농민들과 <br />
                    이를 지지하는 시민들의 뜻에 보다 집중된 태도로 동참합니다. <br />
                    <br />
                    이제 ‘네니아’는 <br />
                    일반 대중을 향한 ‘안전한 먹을거리’에 대한 요구에 적극적으로 부응하고 <br />
                    상품을 공급하고 서비스를 공급하는 것을 넘어 <br />
                    소비자에게 보다 나은 가치 경험을 높이고 확대하는 것에 이바지하고 주력하고자 합니다. <br />
                    <br />
                    기업은 사회 변화의 촉매 역할을 하고, <br />
                    네니아는 우리가 소비하는 먹거리가 생산자와 자연의 유기적 관계에 <br />
                    직접적으로 이어질 수 있는 투명한 연결고리를 제공할 뿐만 아니라 <br />
                    자연의 유기적 순환을 존중하는 사회가치를 공유합니다. <br />
                    <br />
                    네니아의 철학은 농업에 대해 근본적으로 다른 사유방식과 <br />
                    소비자의 책임감 있고 지속 가능한 선택의 실천적 가치를 제시하는 것, <br />
                    마지막으로 소비자, 생산자, 자연이 상호적으로 교차할 수 있는 <br />
                    새로운 영역을 창조해 나가는 데 있습니다.
                  </p>
                </li>
              </ul>
            </div>
            {/* 오른쪽 이미지 영역 */}
            <div className="right"></div>
          </div>
        </div>
      </div>

      {/* 섹션4 - 스토어 상품 소개 */}
      <div className="sec3">
        {/* 스토어리스트 모듈 */}
        <StoreList />
      </div>

      {/* 섹션5 */}
      <div className="sec5 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="nenia" />
        </div>
      </div>
    </div>
  );
}

export default Nenia;
