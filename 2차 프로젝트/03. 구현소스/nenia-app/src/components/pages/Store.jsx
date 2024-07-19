import React, { useState, useRef, useEffect } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";

// 상품리스트 서브컴포넌트 불러오기
import Store_List from "../modules/Store_List.jsx";
// 상품상세보기 서브컴포넌트 불러오기
import Store_detail from "../modules/Store_detail.jsx";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store.scss";

// 제이쿼리
import $ from "jquery";

function Store() {
  // [ 후크 상태관리 변수 셋팅! ] //
  // 1. 카테고리 상태관리변수
  const [activeCat, setActiveCat] = useState(0);
  // 2. 리스트 / 상세보기 전환용 상태관리변수
  const [viewList, setViewList] = useState(true);
  // 3. 상품 데이터 인덱스값 상태관리변수
  const [idx, setIdx] = useState(0);
  // 4. 선택 아이템 고유이름 상태관리변수
  const [selItem, setSelItem] = useState("전체보기");

  // 5. 검색상태 관리변수 : 값유지만 하도록 참조변수로 생성
  const searchSts = useRef(false);

  // 검색기능수행 함수 ////////////////////
  const searchList = () => {
    // 2. 검색어 읽어오기 : 소문자변환, 앞뒤공백제거
    const inpVal = $("#stxt").val().toLowerCase().trim();
    console.log("검색어", inpVal);

    // 3. 검색어입력 안한경우 경고창과 return
    if (inpVal === "") {
      alert("검색어를 입력해주세요");
      return;
    } //////// if //////

    // 데이터 가져오기
    const selData = [...sbread, ...srice, ...smando, ...sicecream];

    console.log("로컬스:", selData);

    // selData 배열에서 tit 속성만 추출하여 새로운 배열 생성
    const titData = selData.map((v) => v.tit);
    console.log("titData:", titData);

    // 4. titData에서 검색기준값으로 검색하기
    const resData = selData.filter((v) => {
      // titData에서 검색어가 포함된 경우에 해당하는 데이터만 필터링
      if (v.tit.includes(inpVal)) {
        return true;
      } else {
        <h2 style={{ textAlign: "center" }}>검색어가 없습니다.</h2>;
      }
    });
    console.log("검색데이터:", resData);

    // 5. 리스트 업데이트 하기
    // orgData = resData;
  }; ////////////// searchList 함수 //////////////

  ////코드리턴구역////////////////////////////////
  return (
    // 전체 감싸는 박스
    <div className="sub-wrap store-wrap">
      {/* 서브인트로 모듈 */}
      <SubIntro catName="store" />
      <div className="total_board_list_wrap">
        <div className="inbox">
          <div className="board_category_tab">
            <nav id="bo_cate">
              <h2>네니아이야기 카테고리</h2>
              <ul id="bo_cate_ul">
                {/* 카테고리 데이터 배열로 만들기 */}
                {storeCat.map((v, i) => (
                  <li key={i} className={v.category}>
                    <a
                      href={v.link}
                      id={activeCat === i ? "bo_cate_on" : ""}
                      className={v.category}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCat(i);
                        // 초이스 종류 변경하기

                        let selItem;

                        if (v.category === "all") {
                          selItem = "전체보기";
                        } else if (v.category === "bread") {
                          selItem = "브레드";
                        } else if (v.category === "ricecake") {
                          selItem = "떡";
                        } else if (v.category === "mando") {
                          selItem = "만두";
                        } else if (v.category === "icecream") {
                          selItem = "아이스크림";
                        }

                        setSelItem(selItem);

                        console.log("카테고리명", selItem);
                        // 초이스 변경시 무조건 리스트 페이지보기
                        // -> viewList 업데이트하기
                        setViewList(true);
       
                      }}
                    >
                      {v.cname}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 검색옵션박스 */}
          <div className="selbx">
            <input
              id="stxt"
              type="text"
              maxLength="50"
              onKeyUp={(e) => {
                // 엔터칠때 검색실행!
                if (e.code === "Enter") searchList();
                // console.log(e.code);
              }}
            />
            <button className="search-btn" onClick={searchList}>
              Search
            </button>
          </div>

          {/* <!-- 스토어리스트 --> */}
          <form name="fboardlist" id="fboardlist">
            <ul className="board_newgallery">
              {
                // 상태관리변수 viewList값이 true이면 리스트보기
                viewList ? <Store_List viewDetail={setViewList} updateIdx={setIdx} selItem={selItem} /> : <Store_detail backList={setViewList} gNo={idx} selItem={selItem} />
                // false이면 상품 상세리스트 보기
              }
            </ul>
          </form>

          {/* 페이지 버튼 */}
          {/* <div className="board_page">
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

          <div className="board_button"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Store;
