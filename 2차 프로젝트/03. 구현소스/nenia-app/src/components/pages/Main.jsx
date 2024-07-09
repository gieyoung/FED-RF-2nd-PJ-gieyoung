// 메인 페이지 컴포넌트 ///
import { useEffect } from "react";
import Slogan from "../modules/Slogan.jsx";
import M3Img from "../modules/M3Img.jsx";
import MainRight from "../modules/MainRight.jsx";
import StoreList from "../modules/StoreList.jsx";

// 메인영역 CSS 불러오기
import "../../css/main.scss";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

// js불러오기
import mainFn from "../func/main.js";
import widthFn from "../func/width_chg.js";
import backMoveFn from "../func/back_move.js";

export default function Main() {
  useEffect(() => {
    // 메인 함수호출
    mainFn();
    // 움직이는 배경 함수 호출
    backMoveFn();
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);
  //// 코드 리턴구역 //////////////
  return (
    <>
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
        <div className="main2 width-chg">
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
                  <div className="btn v-open">
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
                <video id="video" src="https://kfpd.org/visual_video.mp4" preload="metadata"></video>
              </div>
              {/* 비디오 닫기 버튼 */}
              <a className="close-btn flex" href="#null">
                {/* 폰트어썸 사용 */}
                <FontAwesomeIcon icon={faRectangleXmark} />
              </a>
            </div>
          </div>
        </div>
        {/* 메인3 - 움직이는 배경이미지 */}
        <div className="main3 back-move">
          <div className="inbox">
            <ul className="flex">
              {/* 메인3 이미지 컴포넌트 */}
              <M3Img />
            </ul>
            <h2 className="font-4">
              우리 아이들이 푸르고 건강하게
              <br />
              <span>자라나도록 좋은 식품을 만듭니다.</span>
            </h2>
          </div>
        </div>
        {/* 메인4 - 가로스크롤 */}
        <div className="main4 horizon-scroll">
          <div className="inbox tpg">
            <div className="slidePg">
              <ul className="wrap flex">
                <li>
                  {/* 슬로건 모듈 */}
                  <Slogan clsName="main4" />
                </li>
                {/* 메인가로스크롤 모듈 */}
                <MainRight />
              </ul>
            </div>
          </div>
        </div>
        {/* 메인5 - 스토어 상품 소개 */}
        <div className="main5">
          {/* 스토어리스트 모듈 */}
          <StoreList />
        </div>
      </div>
    </div>
    </>
  );
} /////////// Main /////////////////////
