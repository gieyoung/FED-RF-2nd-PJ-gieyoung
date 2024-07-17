import React, { useState } from "react";
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

export default function Store_detail({ backList, gNo, selItem }) {
  // (1) backList - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) gNo - 상품 데이터 배열순번
  // (idx 상태관리변수가 전달됨 - 이 값 변경시 컴포넌트 변경됨)

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
  console.log("선택된 카테고리의 데이터", storeData, gNo, selData[gNo]);
  

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
          >
          </div>
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
                
                {/* 마이너스 버튼 */}
                    <div className="minus-btn"></div>
                    <div className="count-box">
                      <input className="count-input" type="text" value="" />
                    </div>
                 {/* 플러스 버튼 */}
                    <div className="plus-btn"></div>
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
              <button className="list-btn" onClick={() => backList(true)}>리스트 이동</button>
            </div>
          

          </div>
        </div>
       
      </div>
    </>
  );
}
