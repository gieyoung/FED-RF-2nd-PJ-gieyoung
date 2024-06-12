// 메인 페이지 컴포넌트 ///

// 슬로건 데이터 불러오기
// import { slogan } from "../data/slogan";
import Slogan from "../modules/Slogan.jsx";

// 메인영역 CSS 불러오기
import "../../css/main.scss";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// 공통 js 불러오기
import "../func/common.js";

// 메인영역 js불러오기
import "../func/main.js";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <div id="main-area">
      {/* 메인 배너 이미지 */}
      <div className="main-visual"></div>
      {/* 메인 내부 박스 */}
      <div className="main-area">
        <div className="inbox">
          {/* 메인1 - 글자영역 */}
          <div className="txt-wrap">
            {/* 슬로건 모듈 */}
            <Slogan clsName="main1" />
          </div>
        </div>
        {/* 메인2 - 동영상 */}
        <div className="main2">
          <div className="inbox">
            <div className="wrap flex">
              {/* 왼쪽영역 */}
              <div className="left">
                {/* 슬로건 모듈 */}
                <Slogan clsName="main2" />
              </div>

              {/* 오른쪽 영역 */}
              <div className="right flex">
                <div className="video-sum">
                  <div className="btn">
                    <a href="" className="po-center">
                      {/* 폰트어썸 사용 */}
                      <FontAwesomeIcon icon={faPlay} /> Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} /////////// Main /////////////////////
