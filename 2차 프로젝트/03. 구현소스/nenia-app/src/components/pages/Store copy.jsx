import React, { useState } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store.scss";

// 제이쿼리
import $ from "jquery";
import ItemDetail from "../modules/ItemDetail";

function Store({ viewDetail, updateIdx }) {
  // (1) viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) updateIdx - 부모컴포넌트의 setIdx 상태관리변수의 메서드

  // [ 후크 상태관리 변수 셋팅! ] //
  // [1] 카테고리
  const [activeCat, setActiveCat] = useState(0);
  // // [2] 카테고리에 따른 상품리스트
  // const [activeList, setActiveList] = useState("all");
  // 1. 리스트 / 상세보기 전환용 상태관리변수
  const [viewList, setViewList] = useState(true);
  // 2. 상품 데이터 인덱스값 상태관리변수
  const [idx, setIdx] = useState(0);
 

  /////////////////////////////////////////////////////////////////////////////

  // 스토어리스트 데이터 모으기(브레드, 떡, 만두, 아이스크림)
  const selData = [...sbread, ...srice];

  ////코드리턴구역////////////////////////////////
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
                {/* 카테고리 데이터 배열로 만들기 */}
                {storeCat.map((v, i) => (
                  <li key={i} className={v.category}>
                    <a
                      href="#"
                      id={activeCat === i ? "bo_cate_on" : ""}
                      className={v.category}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCat(i);
                      }}
                    >
                      {v.cname}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* <!-- 스토어리스트 --> */}
          <form name="fboardlist" id="fboardlist">
            <ul className="board_newgallery">
              {selData.map((v, i) => (
                <li key={i} className={v.category}>
                  <div className="image">
                    <a
                    href="#"
                    onClick={(e) => {
                      // a요소 기본이동막기
                      e.preventDefault();
                      // 상태변수 viewList 업데이트
                      // setViewList메서드가 viewDetail로 들어옴
                      viewDetail(false);
                      // setIdx메서드가 updateIdx로 들어옴
                      updateIdx(i);
                    }}


                      style={{
                        backgroundImage: `url(${v.isrc})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "227.5px",
                        display: "block",
                      }}
                    ></a>
                    <span>{v.catname}</span>
                  </div>
                  <dl className="info">
                    <dt className="subject">
                      <a className="font-6" href="">
                        {v.tit}
                      </a>
                    </dt>
                    <dd className="content font-7 nanum">{v.price}원</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </form>

          {/* 페이지 버튼 */}
          <div className="board_page">
            <nav className="pg_wrap">
              <span className="pg">
                <span className="sound_only">열린</span>
                <strong className="pg_current">1</strong>
                <span className="sound_only">페이지</span>
                <a href="http://www.nenia.kr/31?amp;&amp;page=2" className="pg_page">
                  2<span className="sound_only">페이지</span>
                </a>
                <a href="http://www.nenia.kr/31?amp;&amp;page=3" className="pg_page">
                  3<span className="sound_only">페이지</span>
                </a>
                <a href="http://www.nenia.kr/31?amp;&amp;page=4" className="pg_page">
                  4<span className="sound_only">페이지</span>
                </a>
                <a href="http://www.nenia.kr/31?amp;&amp;page=5" className="pg_page">
                  5<span className="sound_only">페이지</span>
                </a>
                <a href="http://www.nenia.kr/31?amp;&amp;page=5" className="pg_page pg_end">
                  맨끝
                </a>
              </span>
            </nav>{" "}
          </div>

          <div className="board_button"></div>
        </div>
      </div>
    </div>
  );
}

export default Store;
