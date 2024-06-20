// 메인 페이지 컴포넌트 ///
import SubIntro from "../modules/SubIntro.jsx";


// 메인영역 CSS 불러오기
import "../../css/way.scss";
import "../../css/width_chg.scss";


export default function Nenia() {
  return (
    <div className="sub-wrap way-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="way" />

      <div className="sec1 width-chg back_move">
        <div className="inbox flex">
          <h2 className="font-2">NATURE NEAR, 네니아</h2>
          <p className="font-7">
            네니아는 NATURE NEAR를 합성하여 생성한 말로<br /> 순수한 자연과 가까운 안전한 먹거리로 우리 아이들이 푸르고 건강하게 자라나도록 건강하고 좋은 식품을 만들고 있습니다.<br /> 우리밀을 비롯한 우리 땅에서 나는 원재료로 첨가물을 최대한 배제하여 안전하게
            제조한 친환경 식품을 기획하고 생산합니다.
          </p>
        </div>
      </div>

    </div>
  );
}
