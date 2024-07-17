import React, { useState } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store.scss";

// 제이쿼리
import $ from "jquery";

export default function Store_List({ viewDetail, updateIdx, selItem}) {
  // (1) viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) updateIdx - 부모컴포넌트의 setIdx 상태관리변수의 메서드


  
 // 검색어 상태 관리
 const [keyword, setKeyword] = useState("");

 // 전체 데이터 합치기 (브레드, 떡, 만두, 아이스크림)
 const selData = [...sbread, ...srice, ...smando, ...sicecream];

 // 검색어가 포함된 데이터 필터링
 const filteredData = selData.filter((item) =>
   item.cname.toLowerCase().includes(keyword.toLowerCase())
 );

 // 검색어 입력 시 상태 업데이트
 const handleSearchInputChange = (e) => {
   setKeyword(e.target.value);
 };

 // 검색어 입력 후 엔터 키 처리
 const handleEnterKeyPress = (e) => {
   if (e.key === "Enter") {
     // 엔터 키를 눌렀을 때 추가적인 검색 처리가 필요하면 여기에 추가
   }
 };


  // 선택코드에 따른 데이터 선택하기
  let storeData;

  if (selItem == "전체보기") {
    storeData = selData;
  } else if (selItem == "브레드") {
    storeData = sbread;
  } else if (selItem == "떡") {
    storeData = srice;
  } else if (selItem == "만두") {
    storeData = smando;
  } else if (selItem === "아이스크림") {
    storeData = sicecream;
  }
  console.log("선택된 카테고리의 데이터", storeData);

  return (
    <>

      {/* 검색입력박스 */}
      <div className="searchingGnb">
                {/* 입력창 */}
                <input type="text" name="schinGnb" id="schinGnb" placeholder="Filter by Keyword" onKeyUp={enterKey} />
                {/* 검색버튼 돋보기 아이콘 */}
                <FontAwesomeIcon
                  icon={faSearch}
                  className="schbtnGnb"
                  title="Open search"
                  onClick={(e) => {
                    // 검색어 읽기
                    // let stxt = e.currentTarget.nextElementSibling.value;
                    let stxt = document.getElementById('schinGnb').value;
                    value={keyword}
                    onChange={handleSearchInputChange}
                    onKeyPress={handleEnterKeyPress}
                    console.log("넌뭐니",stxt);
                   
                    // 검색창이 빈값이 아닐때
                    if (stxt.trim() != "") {
                      if (e.key == "Enter") {
                        // 1. 검색어 상태값 변경
                        setKw(e.target.value);
                       
                       
                      } /// if ///
                   
                    } else {
                      // 검색어 비었을때 메시지
                      alert("Please enter a search term!");
                    }
                  }}
                />
              </div>



      {storeData.map((v, i) => (
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
          >
            <dl className="info">
              <dt className="subject">
                <span className="font-6">{v.tit}</span>
              </dt>
              <dd className="content font-7 nanum">{v.disprice}원</dd>
            </dl>
          </a>
        </li>
      ))}
    </>
  );
}
