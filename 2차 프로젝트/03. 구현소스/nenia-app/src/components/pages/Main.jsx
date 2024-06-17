// 메인 페이지 컴포넌트 ///
import Slogan from "../modules/Slogan.jsx";
import M3_img from "../modules/M3_img.jsx";
import MainRight from "../modules/MainRight.jsx";

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
        <div className="main_5 store-list">
          <ul className="left main_5s">
            <li className="main5_1"></li>  
            <li className="main5_2"></li>  
            <li className="main5_3"></li>  
            <li className="main5_4"></li>  
            <li className="main5_5"></li>  
            <li className="main5_6"></li>  
            <li className="main5_7"></li>  
            <li className="main5_8"></li>  
          </ul>
          <div className="right main_5s">
            <ul>
              <li>
                {/* 슬로건 모듈 */}
                <Slogan clsName="storeList" />
              </li>
              <li className="main5_1">
                <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak1.jpg" alt=""/></figure>
                <h2 className="font-3">우리밀 만두</h2>
                <p className="font-6 nanum">무농약 우리밀로 만든 만두피에 무항생제 돼지고기, 
                국산 생야채로 만든 소를 듬뿍 넣어 만들었습니다. 
                마지막 참기름 한방울까지 엄선된 국산 재료를 사용합니다. 
                </p>
              </li>
              <li className="main5_2">
                <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak2.jpg" alt=""/></figure>
                <h2 className="font-3">우리밀 베이커리 / 잼</h2>
                <p className="font-6 nanum">무농약 우리밀과 국산 우유로 만든 천연버터로 만든 베이커리에 
                국산 재료들로 다채로움을 더했습니다. 
                </p>
              </li>
              <li className="main5_3">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak3.jpg" alt=""/></figure>
                <h2 className="font-3">음료 / 아이스크림</h2>
                <p className="font-6 nanum">국산 과일만을 착즙한 주스, 무항생제 우유와 
                국산 과일로 만든 요구르트, 유기농 우유로 만든 유기농 아이스크림,
                자연재료로 정직하게 만들었습니다. 
                </p>
              </li>
              <li className="main5_4">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak4.jpg" alt=""/></figure>
                <h2 className="font-3">육가공</h2>
                <p className="font-6 nanum">무항생제 한우 사골 100%로 만든 농축액과 무항생제 돼지, 
                오리에 천연 향신료로 맛과 향을 더했습니다.  
                공정이 더 늘어나고 번거롭더라도 재료 본연의 맛을 담아냈습니다.
                </p>
              </li>
              <li className="main5_5">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak5.jpg" alt=""/></figure>
                <h2 className="font-3">우리밀가루 / 우리밀면</h2>
                <p className="font-6 nanum">전라도와 경상도 청정지역에서 재배 된 무농약 우리밀과 
                무농약 쌀로 만들었습니다. 
                유기농, 무농약 우리밀을 훈증처리 없이 저온저장고에 
                보관하여 상품 생산시 원재료로 사용하고 있습니다. 
                </p>
              </li>
              <li className="main5_6">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak6.jpg" alt=""/></figure>
                <h2 className="font-3">떡</h2>
                <p className="font-6 nanum">무농약 멥쌀과 찹쌀에 자연에서 온 단호박, 백년초, 쑥 등으로 
                재료 본연의 색과 맛을 냈습니다.  
                냉장온도에서 굳지 않는 기술과 냉동떡 복원기술로 떡을 만듭니다. 
                </p>
              </li>
              <li className="main5_7">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak7.jpg" alt=""/></figure>
                <h2 className="font-3">찬류</h2>
                <p className="font-6 nanum">우리바다에서 온 국산 유기원초와 국산 생선살 100%로 유기농 김과 어묵을 만듭니다.  
                우리땅에서 자란 콩, 도토리, 녹두로 만든 전통방식 그대로의 두부, 묵입니다.
                </p>
              </li>
              <li className="main5_8">
              <figure><img src="http://nenia.kr/theme/responsive_nenia/include/img/main5_bak8.jpg" alt=""/></figure>
                <h2 className="font-3">소스 / 전통장</h2>
                <p className="font-6 nanum">국산 토마토, 생크림, 고춧가루 등 국산 원료를 전통 방식 
                그대로 느리게 만들었습니다.
                정성과 시간이 만든 깊은 맛입니다. 
                </p>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </div>
  
  );
} /////////// Main /////////////////////
