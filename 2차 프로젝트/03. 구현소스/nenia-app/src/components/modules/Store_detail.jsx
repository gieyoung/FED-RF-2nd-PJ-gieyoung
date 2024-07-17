import React, { useContext, useEffect, useState, useRef } from "react";
import SubIntro from "../modules/SubIntro.jsx";
import { Link } from "react-router-dom";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store_detail.scss";

// 제이쿼리
import $ from "jquery";
import { pCon } from "./pCon";

export default function Store_detail({ backList, gNo, selItem, tot, setTot, dt }) {
  
  // (1) backList - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) gNo - 상품 데이터 배열순번
  // (idx 상태관리변수가 전달됨 - 이 값 변경시 컴포넌트 변경됨)
    // tot - 상품토탈정보
  // setTot - 상품토탈정보 업데이트함수
  // dt - 상품데이터

  // 상품정보 개별 셋업 ////
  // cat - 카테고리
  // let cat = tot.category;
  // // ginfo - 상품정보
  // let ginfo = tot.ginfo;
  // // gIdx - 상품고유번호
  // let gIdx = tot.idx;

  // console.log(cat, ginfo, gIdx);

  
  // // 전역 카트 사용여부값 업데이트 사용위해 전역 컨텍스트 사용
  // const myCon = useContext(pCon);

  // // 제이쿼리 이벤트함수에 전달할 ginfo값 참조변수
  // const getGinfo = useRef(ginfo);
  // // getGinfo참조변수는 새로들어온 ginfo전달값이 달라진 경우
  // // 업데이트한다!
  // if (getGinfo.current != ginfo) getGinfo.current = ginfo;

  // 스토어리스트 데이터 모으기(브레드, 떡, 만두, 아이스크림)
  const selData = [...sbread, ...srice, ...smando, ...sicecream];

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
  // console.log("선택된 카테고리의 데이터", storeData, gNo, selData[gNo]);


  // 화면랜더링구역 : 한번만 //////////
  useEffect(() => {
    
    // [ 수량증감 버튼클릭시 증감기능구현 ]

    // 1. 대상요소 ///////
    // (1) 숫자출력 input
    const sum = $("#sum");
    // (2) 수량증감 이미지버튼
    const numBtn = $(".chg_num");
    // (3) 총합계 요소
    const total = $("#total");
    // console.log(sum,numBtn);

  

    // 참고) 제거용 -> numBtn.off("click");
  }, []); /// 현재컴포넌트 처음생성시 한번만 실행구역 ///

  // [ 화면랜더링구역 : 매번 ] ///
  useEffect(() => {
    // 매번 리랜더링 될때마다 수량초기화!
    $("#sum").val(1);
    
  }); ////////// useEffect //////

  // 코드리턴구역 ///////////
  return (
    <>
      <div className="product-container">
        <div className="product-top">
          <div
            className="thumbnail-box"
            style={{
              background: `url(${storeData[gNo].isrc})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="product-box">
            <div className="product-tit-box">
              <div className="product-name">{storeData[gNo].tit}</div>

              <div className="product-desc">
                <div>{storeData[gNo].txt}</div>
              </div>
            </div>
            <div className="product-order-box">
              <div className="product-order-list product-price">
                <span>판매가</span>
                <span className="price-right">
                  {/* 할인가 */}
                  <span>{storeData[gNo].disprice}</span>
                  <span className="price">
                    {/* 정가 */}
                    {storeData[gNo].price}
                  </span>
                </span>
              </div>
              <div className="product-order-list product-point">
                <span>보관법</span>
                <span className="point-right">{storeData[gNo].method}</span>
              </div>
            </div>
            <div className="product-ordered-box"></div>
            <div className="total-price-box">
              <span>총 합계</span>
              <div className="option-counter">
                {/* 카운트 박스 */}
                <div className="count-box">
                  <input
                    className="count-input"
                    type="text"
                    id="sum"
                    defaultValue="1"
                  />
                </div>
                
                <div className="btn chg_num">
                  {/* 마이너스 버튼 */}
                  <div className="minus-btn"></div>
                  {/* 플러스 버튼 */}
                  <div className="plus-btn"></div>
                </div>
              </div>
              <span>
                0
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    paddingLeft: "5px",
                  }}
                >
                  원
                </span>
              </span>
            </div>
            <div className="product-btns">
              <button className="buy-btn">구매하기</button>
              <button className="cart-btn">장바구니</button>
              <button className="list-btn" onClick={() => backList(true)}>
                리스트 이동
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
