import React, { useState, useRef, useEffect, useContext } from "react";
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
import { dCon } from "../modules/dCon.jsx";

function Store() {
  // [ 후크 상태관리 변수 셋팅! ] //
  // 1. 카테고리 상태관리변수
  const [activeCat, setActiveCat] = useState(0);

  const myCon = useContext(dCon);
  const viewList = myCon.viewList;
  const setViewList = myCon.setViewList;
  // 2. 리스트 / 상세보기 전환용 상태관리변수
  // const [viewList, setViewList] = useState(true);
  // 3. 상품 데이터 인덱스값 상태관리변수 -> 컨텍스트API변수로 변경한다!!!
  // const [idx, setIdx] = useState(0);
  const idx = myCon.idx;
  const setIdx = myCon.setIdx;

  // 4. 선택 아이템 고유이름 상태관리변수
  const [selItem, setSelItem] = useState("전체보기");

  // 5. 검색상태 관리변수 : 값유지만 하도록 참조변수로 생성
  const searchSts = useRef(false);

  // 6. 검색박스 가시성 상태관리변수
  const [searchVisible, setSearchVisible] = useState(true);

  // 7. 검색어 하이라이트 상태관리변수
  const [searchWord, setSearchWord] = useState("");

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const orgData = [...sbread, ...srice, ...smando, ...sicecream];

  // 데이터 가져오기
  const [selData, setSelData] = useState(orgData);

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

    console.log("로컬스:", orgData);

    // orgData 배열에서 tit 속성만 추출하여 새로운 배열 생성
    const titData = orgData.map((v) => v.tit);
    console.log("titData:", titData);

    // 4. titData에서 검색기준값으로 검색하기
    const resData = orgData.filter((v) => {
      // titData에서 검색어가 포함된 경우에 해당하는 데이터만 필터링
      if (v.tit.includes(inpVal)) {
        return true;
      } else {
        <h2 style={{ textAlign: "center" }}>검색어가 없습니다.</h2>;
      }
    });
    console.log("검색데이터:", resData);

    // 5. 리스트 업데이트 하기
    setSelData(resData);

    setSelItem("전체보기");
    setActiveCat(0);
  }; ////////////// searchList 함수 //////////////

  // 페이지 로드 시 스크롤 위치 800px로 이동
  useEffect(() => {
    window.scrollTo(0, 800);
  }, []);

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

                        $("#stxt").val("");
                        setSearchWord(""); // 검색어 초기화

                        if (v.category === "all") {
                          selItem = "전체보기";
                          setSelData(orgData);
                          setSearchVisible(true);
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
                        if (selItem !== "전체보기") {
                          setSearchVisible(false);
                        }
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
          <div className={`selbx ${searchVisible ? "show" : ""}`}>
            <input
              id="stxt"
              type="text"
              maxLength="50"
              value={searchWord}
              onChange={handleSearchChange}
              placeholder="검색어 입력"
              onKeyUp={(e) => {
                // 엔터칠때 검색실행!
                if (e.code === "Enter") searchList();
                // console.log(e.code);
              }}
            />
            <button className="search-btn" onClick={searchList}>
              검색
            </button>
          </div>

          {/* <!-- 스토어리스트 --> */}
          <form name="fboardlist" id="fboardlist">
            <ul className="board_newgallery">
              {
                // 상태관리변수 viewList값이 true이면 리스트보기
                viewList ? (
                  <Store_List selData={selData} viewDetail={setViewList} updateIdx={setIdx} selItem={selItem} setSearchVisible={setSearchVisible} searchWord={searchWord} />
                ) : (
                  <Store_detail backList={setViewList} gNo={idx} selItem={selItem} setSearchVisible={setSearchVisible} />
                )
                // false이면 상품 상세리스트 보기
              }
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Store;
