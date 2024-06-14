// 메인 페이지 컴포넌트 ///
import Slogan from "../modules/Slogan.jsx";
import M3_img from "../modules/M3_img.jsx";
import MainRightScroll from "../modules/MainRightScroll.jsx";

// 메인영역 CSS 불러오기
import "../../css/main.scss";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

// 메인 js불러오기
import mainFn from "../func/main.js";
import { useEffect } from "react";


export default function Main() {
  useEffect(() => {
    mainFn();
  }, []);
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
        <div className="main3">
          <div className="inbox">
            <div className="wrap">
              <ul className="flex">
                {/* 메인3 이미지 컴포넌트 */}
                <M3_img />
              </ul>
              <h2 className="font-4">
                우리 아이들이 푸르고 건강하게
                <br />
                <span>자라나도록 좋은 식품을 만듭니다.</span>
              </h2>
            </div>
          </div>
        </div>
        {/* 메인4 - 가로스크롤 */}
        <div className="main4 horizon-scroll">
          <div className="inbox">
            <ul className="wrap flex">
              <li>
                  {/* 슬로건 모듈 */}
                  <Slogan clsName="main4" />
              </li>
              {/* 슬로건 모듈 */}
              <MainRightScroll clsName="nenia_way" />


              {/* <li>
                <a href="http://nenia.kr/page/21" className="img_box">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img1.png" alt="" />
                </a>
                <h1 className="font-2">네니아웨이</h1>
                <a className="font-8" href="http://nenia.kr/page/21">
                  <div className="a_bg"></div>
                  <div className="label">더 알아보기</div>
                </a>
              </li>
              <li>
                <a href="http://nenia.kr/page/22" className="img_box">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img2.png" alt="" />
                </a>
                <figure className="logo">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img2_logo.png" alt="" />
                </figure>
                <a className="font-8" href="http://nenia.kr/page/22">
                  <div className="a_bg"></div>
                  <div className="label">더 알아보기</div>
                </a>
              </li>
              <li>
                <a href="http://nenia.kr/page/25" className="img_box">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img3.png" alt="" />
                </a>
                <figure className="logo">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img3_logo.png" alt="" />
                </figure>
                <a className="font-8" href="http://nenia.kr/page/25">
                  <div className="a_bg"></div>
                  <div className="label">더 알아보기</div>
                </a>
              </li>
              <li>
                <a href="http://nenia.kr/page/24" className="img_box">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img4.png" alt="" />
                </a>
                <figure className="logo">
                  <img src="http://nenia.kr/theme/responsive_nenia/include/img/main4_img4_logo.png" alt="" />
                </figure>
                <a className="font-8" href="http://nenia.kr/page/24">
                  <div className="a_bg"></div>
                  <div className="label">더 알아보기</div>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} /////////// Main /////////////////////
