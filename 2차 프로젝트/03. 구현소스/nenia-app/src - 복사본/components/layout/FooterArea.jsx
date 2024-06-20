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
          {/* <!-- 로고 --> */}
          <h2 className="logo">
            <a href="" alt="네니아 로고">
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
                  <a href={v.link} target="_blank">
                    <img src={v.img} alt={v.alt}></img>
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
                  <a className="font-9" href="#">
                    <span>개인정보처리방침</span>
                  </a>
                </li>
                <li>
                  <a className="font-9" href="#">
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
        </footer>
      </div>
    </>
  );
} /////////// FooterArea /////////////////////
