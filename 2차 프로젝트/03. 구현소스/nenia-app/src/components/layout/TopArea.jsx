// 상단영역 컴포넌트 ///
import { useEffect } from "react";

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

// 공통(상단/하단) js 불러오기
import commonFn from "../func/common";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";

export default function TopArea({ loginSts, logoutFn, goPage }) {
  useEffect(() => {
    commonFn();
  }, []);

  // const goToTop = () => window.scrollTo(0,0);
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
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
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
              </ul>
            </nav>

            {/* <!-- 1-1.로고 --> */}
            <h1 className="logo">
              <Link to="/" className="po-center" alt="네니아 로고">
                <span className="ir">로고</span>
              </Link>
            </h1>
            {/* <!-- 1-3.기타 --> */}
            <ul className="etc-box flex">
              {
                // 로그인 상태가 null일때 나옴
                loginSts === null && (
                  <>
                    {/* <!-- 로그인 --> */}
                    <li className="login btn">
                      <Link to="/login" className="po-center">
                        로그인
                      </Link>
                    </li>
                    {/* <!-- 회원가입 --> */}
                    <li className="join btn">
                      <Link to="/member" className="po-center">
                        회원가입
                      </Link>
                    </li>
                  </>
                )
              }
              {
                // 로그인 상태일 때
                loginSts !== null && (
                  <>
                    {/* <!-- 장바구니 --> */}
                    <li className="cart btn">
                      <Link to="/cart" className="po-center">
                        장바구니
                      </Link>
                    </li>
                    {/* <!-- 로그아웃 --> */}
                    <li className="login btn">
                      <a
                        href="#"
                        className="po-center"
                        onClick={(e) => {
                          e.preventDefault();
                          logoutFn();
                        }}
                      >
                        로그아웃
                      </a>
                    </li>
                  </>
                )
              }
            </ul>

            {/* 모바일 메뉴 */}
            <div className="m-gnb only-m">
              <a href="#" className="m_btn">
                <span>메뉴</span>
              </a>
            </div>
            <div className="hidden"></div>
          </div>
        </header>
      </div>
    </>
  );
} /////////// TopArea /////////////////////
