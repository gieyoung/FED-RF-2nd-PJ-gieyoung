// 하단영역 컴포넌트 ///

// 데이터 불러오기
import { Link } from "react-router-dom";
import { sns } from "../data/sns";

// 하단영역 CSS 불러오기
import "../../css/footer_area.scss";

export default function FooterArea() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <div id="footer-area">
        <footer className="footer-area inbox flex">
          {/* 하단 첫번째 박스 */}
          <div className="f1-box">
            {/* 왼쪽영역 */}
            <div className="left">
              <h1 className="font-2">자연가까이, 네니아</h1>

              <ul>
                <li className="btn"><a className="po-center" href="/store">회원가입</a></li>
                <li className="btn"><a className="po-center" href="/store">로그인</a></li>
              </ul>
               
            </div>
            {/* 오른쪽영역 */}
            <ul className="right">
              <li>
              <Link to="/way" className="font-4">회사소개</Link>
              </li>
              <li>
              <Link to="/nenia" className="font-4">사업소개</Link>
              </li>
              <li>
              <Link to="/store" className="font-4">스토어</Link>
              </li>
            </ul>
          </div>
          {/* 하단 두번째 박스 */}
          <div className="f2-box">
            {/* <!-- 로고 --> */}
            <h2 className="logo">
              <a href="/main" alt="네니아 로고">
                <span className="ir">로고</span>
              </a>
            </h2>
            <div className="mid">
              {/* <!-- 주소 --> */}
              <address className="font-9">
                <p>
                  <span>농업회사법인(주)네니아</span>
                </p>
                <p>경기도 양평군 강상면 강남로 1532-9, 2층</p>
                <p>
                  <span>TEL.</span> 1577-2341
                </p>
                <p>
                  <span>FAX.</span> 031-716-6611
                </p>
              </address>

              {/* <!-- sns --> */}
              <ul className="sns">
                {/* sns 데이터 배열로 만들기 */}
                {sns.map((v, i) => (
                  <li key={i}>
                    <a href={v.link} target="_blank" rel="noreferrer">
                      <img src={process.env.PUBLIC_URL+v.img} alt={v.alt}></img>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="last">
              {/* <!-- 개인정보처리방침 --> */}
              <div className="privacy">
                <ul>
                  <li>
                    <a className="font-9" href="/main">
                      <span>개인정보처리방침</span>
                    </a>
                  </li>
                  <li>
                    <a className="font-9" href="/main">
                      이용약관
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- 저작권 --> */}
              <div className="copyright font-10">
                <p>COPYRIGHT © 2023 네니아. All RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>

          {/* 탑버튼 */}
          <a href="#null" className="top-btn">
            <span className="ir">Top</span>
          </a>
        </footer>
      </div>
    </>
  );
} /////////// FooterArea /////////////////////
