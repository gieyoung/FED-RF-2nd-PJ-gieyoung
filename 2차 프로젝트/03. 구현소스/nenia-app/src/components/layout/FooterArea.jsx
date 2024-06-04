// 하단영역 컴포넌트 ///

// 데이터 불러오기
import { Link } from "react-router-dom";
import { sns } from "../data/sns";


// 하단영역 CSS 불러오기
import "../../css/footer_area.scss";

export default function FooterArea(){

  //// 코드 리턴구역 //////////////
  return(
      <>
          <div id="footer-area">
        <footer className="footer-area inbox">
          {/* <!-- 로고 --> */}
          <h2 className="logo">
            <a href="" alt="네니아 로고"><span className="ir">로고</span></a>
          </h2>
          <div className="mid">
            {/* <!-- 주소 --> */}
            <address className="font-9">
              <p><span>농업회사법인(주)네니아</span></p>
              <p>경기도 양평군 강상면 강남로 1532-9, 2층</p>
              <p><span>TEL.</span> 1577-2341</p>
              <p><span>FAX.</span> 031-716-6611</p>
            </address>
            
            {/* <!-- sns --> */}
            <ul>
              {/* sns 데이터 배열로 만들기 */}
              {sns.map((v,i)=>(
                <li key={i}><a href={v.link} target="_blank"><img src={v.img} alt={v.alt}></img></a></li>
              ))}
					  </ul>
          </div>
          {/* <!-- 개인정보처리방침 --> */}
          {/* <!-- 저작권 표시 --> */}


        </footer>
      </div>
      </>
  );

} /////////// FooterArea /////////////////////