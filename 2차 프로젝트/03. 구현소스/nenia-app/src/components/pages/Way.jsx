// 네니아웨이 페이지 컴포넌트 ///
import { useEffect } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import SubRight from "../modules/SubRight.jsx";
import History from "../modules/History.jsx";
import Family from "../modules/Family.jsx";
import SubLast from "../modules/SubLast.jsx";

// CSS 불러오기
import "../../css/way.scss";


// js불러오기
import widthFn from "../func/width_chg.js";
import backMoveFn from "../func/back_move.js";
import wayFn from "../func/way.js";

export default function Nenia() {
  useEffect(() => {
    wayFn();
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);

  return (
    // 전체 감싸는 박스
    <div className="sub-wrap way-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="way" />

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

      {/* 섹션2 */}
      <div className="sec2">
        <div className="inbox">
          <h2 className="font-2">네니아 로고 소개</h2>
          <img src="/images/way/sec2.png" alt="로고 이미지" />
          <p className="font-6">
            ‘네니아’의 B.I.는 인간과 자연의 생명의 신비에 대하여 <br />
            경의를 표하는 마음으로 착안되었습니다. B.I.의 시작은 '씨앗'입니다. <br />
            이 '씨앗'은 한 농부의 노동하는 수고스러움의 손가락 지문과 만나며 이 지문은 이 <br />
            세상의 자연과 부단히 소통하는 인증(認證)이기도 합니다. 씨를 뿌리고 작물을 가꾸고 <br />
            거두어들이고 보관하고 운반하는 사람들의 노고에는 농부의 희미하게 닳아 잘 보이지 않는 <br />
            손가락의 지문으로부터 출발되고 시작됩니다. 곧 인간과 자연의 관계망을 의미합니다.
          </p>
        </div>
      </div>

      {/* 섹션3 - 연혁 */}
      <div className="sec3">
        <div className="inbox">
          {/* 연혁 모듈 */}
          <History yearName="year" />
        </div>
      </div>

      {/* 섹션4 - 가로 스크롤*/}
      <div className="sec4 shorizon-scroll flex">
        <div className="inbox">
          <h1 className="font-2">
            백년이 지나도 변치않을 <br />
            네니아 제조원칙
          </h1>
          {/* 서브가로스크롤 모듈 */}
          <SubRight clsName="way" />
        </div>
      </div>
      <div className="sec5">
        {/* 패밀리사이트 무한이동스크롤 모듈 */}
        <Family />
      </div>
      <div className="sec6 sub-last">
        <div className="inbox">
          {/* 서브마지막 링크 모듈 */}
          <SubLast clsName="way" />
        </div>
      </div>
    </div>
  );
}
