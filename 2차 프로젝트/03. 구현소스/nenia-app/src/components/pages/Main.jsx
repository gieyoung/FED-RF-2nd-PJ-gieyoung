// 메인 페이지 컴포넌트 ///

// 슬로건 데이터 불러오기
import { slogan } from "../data/slogan";

// 메인영역 CSS 불러오기
import "../../css/main.scss";

// 메인영역 js불러오기
import  "../func/main.js";


export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <div id="main-area">
      {/* 메인 배너 이미지 */}
      <div className="main-visual"></div>
      {/* 메인 내부 박스 */}
      <div className="main-area inbox">
        {/* 메인1 - 글자영역 */}
        <div className="txt-wrap">
          <h1 className="font-5">자연 가까이, 네니아</h1>
          <p className="font-2">
            <span>우리밀을 비롯한 우리 땅에서 나는 원재료로 <br />
            친환경 식품을 기획하고 생산합니다.</span>
          </p>
          <div className="btn">
            <a href="" className="po-center">
              더 알아보기
            </a>
          </div>
        </div>

        {/* 메인2 - 동영상 */}
        <div className="main2">
          <div className="wrap flex">
            {/* 왼쪽영역 */}
            <div className="left">
              <div className="text-wrap">
                <h1 className="font-5">About US</h1>
                <p className="font-2">
                  더 나은 사회가치를<br>
                  </br><span>공유하고자 노력합니다.</span>
                </p>
              </div>
            </div>
            {/* 오른쪽 영역 */}
            <div className="right">
              <div className="video-sum">
                <div className="btn po-center">
                  <a href="" className="">
                    ▷ Watch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} /////////// Main /////////////////////
