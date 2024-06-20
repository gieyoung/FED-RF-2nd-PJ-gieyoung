// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";


// 공통(상단/하단) js 불러오기
import commonFn from "../func/common"

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import { useEffect } from "react";

export default function TopArea() {

  useEffect(()=>{
    commonFn();
  },[]);
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div id="top-area">
        <header className="top-area inbox po-centerX flex">
          <div className="nav-wrap flex">
            {/* <!-- 1-1.메뉴 --> */}
            <nav id="nav">
              <ul className="gnb flex">
                {menu.map((v, i) => (
                  <li key={i} className="gnb-depth1">
                    {
                      // 하위 메뉴가 있으면 일반 a요소에 출력
                      // 없으면 Link 라우팅 출력
                      v.sub ? (
                        <a href="#">
                          <span>{v.txt}</span>
                        </a>
                      ) : (
                        <Link to={v.link}>
                          <span>{v.txt}</span>
                        </Link>
                      )
                    }
                    {
                      // 서브 메뉴 데이터가 있으면 하위그리기
                      v.sub && (
                        <ul className="gnb-depth2 po-centerX">
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              <Link to={v.link}>
                                <span>{v.txt}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )
                    }
                  </li>
                ))}

                {/* <li class="gnb-depth1">
                  <a href=""><span>회사소개</span></a>
                  <ul class="gnb-depth2 po-centerX">
                    <li>
                      <a href=""><span>네니아way</span></a>
                    </li>
                    <li>
                      <a href=""><span>우리밀이야기</span></a>
                    </li>
                  </ul>
                </li>
                <li class="gnb-depth1">
                  <a href="./sub.html"><span>사업소개</span></a>
                  <ul class="gnb-depth2 po-centerX">
                    <li>
                      <a href=""><span>네니아</span></a>
                    </li>
                    <li>
                      <a href=""><span>친환경급식</span></a>
                    </li>
                    <li>
                      <a href=""><span>네니아브레드</span></a>
                    </li>
                  </ul>
                </li>
                <li class="gnb-depth1">
                  <a href=""><span>네니아소식</span></a>
                </li>
                <li class="gnb-depth1">
                  <a href=""><span>스토어</span></a>
                </li> */}
              </ul>
            </nav>
            {/* <!-- 1-1.로고 --> */}
            <h1 className="logo">
            <Link to= "/" className="po-center" alt="네니아 로고">
                <span className="ir">로고</span>
              </Link>
            </h1>
            {/* <!-- 1-3.기타 --> */}
            <ul className="etc-box flex">
              {/* <!-- 로그인 --> */}
              <li className="login btn">
                <a href="" className="po-center">
                  로그인
                </a>
              </li>
              {/* <!-- 회원가입 --> */}
              <li className="join btn">
                <a href="" className="po-center">
                  회원가입
                </a>
              </li>
              {/* <!-- 장바구니 --> */}
              <li className="cart btn">
                <a href="" className="po-center">
                  장바구니
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
} /////////// TopArea /////////////////////
