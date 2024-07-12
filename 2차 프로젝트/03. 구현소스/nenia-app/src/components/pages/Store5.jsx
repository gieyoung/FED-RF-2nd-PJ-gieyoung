// 스토어 페이지 컴포넌트 ///
import React from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";
// 스토어 카테고리 데이터 불러오기
import { storeCat } from "../data/store_cat.js";

// CSS 불러오기
import "../../css/store.scss";

function Store5(props) {
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap store-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="store" />

      <div className="total_board_list_wrap">
        <div className="inner">
          <div className="board_category_tab">
            <nav id="bo_cate">
              <h2>네니아이야기 카테고리</h2>
              <ul id="bo_cate_ul">
                {/* 데이터 배열로 만들기 */}
                {storeCat.map((v, i) => (
                  <li key={i}>
                    {/* <a href="">{v.catname}</a> */}
                    <Link to={v.link}>{v.catname}</Link>
                  
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="board_top">
            {/* <!-- <img src="/ilg_bz070223b/www/theme/responsive_nenia/skin/board/basic/img/icon_total.gif" align="absmiddle"> --> */}
            {/* <!-- <span style="color:#888888; font-weight:bold;">Total 8</span> --> */}
          </div>

          {/* <!-- 제목 --> */}
          <form name="fboardlist" id="fboardlist" action="http://www.nenia.kr/bbs/board_list_update.php" method="post">
            <input type="hidden" name="bo_table" value="31" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="spt" value="-36" />
            <input type="hidden" name="sca" value="보도자료" />
            <input type="hidden" name="page" value="1" />
            <input type="hidden" name="sw" value="" />
            <input type="hidden" name="btn_submit" id="btn_submit" value="" />

            <ul className="board_newgallery">
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/76?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/76?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      네니아 귤은껍질까지,‘유기농 스타상품 경진대회’서 국무총리상
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">부산벡스코에서 열린&nbsp;‘대한민국 유기농 스타상품 경진대회’는 농식…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/66?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      꽃밥에피다 인사동 친환경한식레스토랑 2024 미쉐린 빕구르망 7년 연속 선정
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">&nbsp;&nbsp;합리적인 가격에 훌륭한 요리를 선보이는 미쉐린 가이…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/65?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/65?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      양평군-네니아, 밀 산업 육성을 위한 양평밀 활용 업무 협약
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">(왼쪽부터) 송만영 매력양평 군수, 문영진 네니아 대표, 전진선 양평 군…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/64?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/64?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      네니아 우리밀 초코칩쿠키 판매수익금 후원
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">네니아는 비영리, 사회재단, 공동체 등에 지속적인 후원을 매년 이어가고 …</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/60?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/60?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      네니아, '코엑스 푸드위크' 참여
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">&nbsp;지난 11월 22일 '2023 코엑스 푸드위크' 전시회에 참여…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/59?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/59?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      도시재생사업의 성공 및 지속성을 위해 네니아.양평군 업무 협약
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">&nbsp;농업회사법인(주)네니아와 양평군은 지난 9월 21일&nbsp;…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/56?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/56?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      국산밀데이 소비확대 선언식
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">2023년 8월 31일 서울 양재동 aT센터에서 2023년 ‘국산밀데이’…</dd>
                </dl>
              </li>
              <li>
                <div className="image">
                  <a
                    href="http://www.nenia.kr/31/40?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C"
                    style={{
                      backgroundImage: "url('http://www.nenia.kr/data/file/31/3696084091_fBDOFuAh_cd0ab3b23b348c27a67244eb317b72014903ff0d.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "227.5px",
                      display: "block",
                    }}
                  ></a>
                  <span>보도자료</span>
                </div>
                <dl className="info">
                  <dt className="subject">
                    <a className=" font-5" href="http://www.nenia.kr/31/40?amp;sca=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C">
                      양평 우리밀 문화행사 참가
                    </a>
                  </dt>
                  <dd className="content font-7 nanum">우리밀·친환경 식품 전문 기업 네니아,양평 우리밀 문화행사 참가- 5월&amp;…</dd>
                </dl>
              </li>
            </ul>
          </form>

          <div className="board_button">{/* <!-- <a href="http://www.nenia.kr/31">목록</a> -->  */}</div>
        </div>
      </div>
    </div>
  );
}

export default Store5;
