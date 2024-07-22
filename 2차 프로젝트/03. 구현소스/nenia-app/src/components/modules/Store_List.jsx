import React, { useRef, useState } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store.scss";

// 제이쿼리
import $ from "jquery";

export default function Store_List({ selData, viewDetail, updateIdx, selItem, setSearchVisible }) {
  // 스토어리스트 데이터 모으기(브레드, 떡, 만두, 아이스크림)
  // const selData = [...sbread, ...srice, ...smando, ...sicecream];
  // (1) viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) updateIdx - 부모컴포넌트의 setIdx 상태관리변수의 메서드

  // 원본 데이터
  const orgData = [...sbread, ...srice, ...smando, ...sicecream];

  const tempData = useRef(selData);

  
  if(tempData.current != orgData){
    tempData.current = selData;
  }

  console.log("비교데이터:",tempData.current);


  // 선택코드에 따른 데이터 선택하기
  let storeData;

  if (selItem == "전체보기") {
    storeData = tempData.current != orgData && selData;
    // 검색창 보이게 하기
    setSearchVisible(true);
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
                // setSearchVisible(false); 
                // 검색창 안보이게 하기
             
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
            <a
              href="#"
              onClick={(e) => {
                // a요소 기본이동막기
                e.preventDefault();
                // 상태변수 viewList 업데이트
                // setViewList메서드가 viewDetail로 들어옴
                // 상태관리변수 viewList값이 true이면 리스트보기
                // false이면 상품 상세리스트 보기
                viewDetail(false);
                // setIdx메서드가 updateIdx로 들어옴
                updateIdx(i);
                // setSearchVisible(false); 
                // 검색창 안보이게 하기
             
              }}
            >
              <dt className="subject">
                <span className="font-6">{v.tit}</span>
              </dt>
              <dd className="content font-7 nanum">{v.disprice}원</dd>
            </a>
          </dl>
        </li>
      ))}
    </>
  );
}
