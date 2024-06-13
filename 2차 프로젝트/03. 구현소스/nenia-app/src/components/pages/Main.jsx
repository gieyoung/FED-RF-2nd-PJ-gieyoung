// 메인 페이지 컴포넌트 ///


import Slogan from "../modules/Slogan.jsx";
import M3_img from "../modules/M3_img.jsx";

// 메인영역 CSS 불러오기
import "../../css/main.scss";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

// 공통(상단/하단) js 불러오기
import "../func/common.js";

// 메인 js불러오기
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
                    <a href="#null" className="po-center">
                      {/* 폰트어썸 사용 */}
                      <FontAwesomeIcon icon={faPlay} /> Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 비디오 팝업 */}
            <div className="vid-popup flex">
              <div className="video-bg">
                <video id="s11_video" loop="" muted="" preload="metadata">
                  <source src="https://kfpd.org/visual_video.mp4" type="video/mp4" />
                </video>
              </div>
              {/* 비디오 닫기 버튼 */}
              <a className="close-btn flex" href="#null">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faRectangleXmark} />
              </a>
            </div>
          </div>
        </div>

        <div className="main3">
          <div className="inbox">
            <div className="wrap">
              <ul className="flex">
                {/* 메인3 이미지 컴포넌트 */}
                <M3_img />
              </ul>
              <h2 className="font-4">
                우리 아이들이 푸르고 건강하게<br/><span>자라나도록 좋은 식품을 만듭니다.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} /////////// Main /////////////////////
