/// [ 상품 상세보기 서브컴포넌트 : GoodsDetail ] ///

import React, { useState } from "react";

// 데이터 불러오기
import { storeCat } from "../data/store_cat.js";
import { sbread, srice } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

export default function GoodsDetail({ backList, gNo}) {
  // (1) backList - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) gNo - 상품 데이터 배열순번
  // (idx 상태관리변수가 전달됨 - 이 값 변경시 컴포넌트 변경됨)
  
 

  // 코드리턴구역 ///////////
  return (
    <ol
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "center",
      }}
    >
      <li>
        <img
          src={
            (selItem=="공유"?"./images/vans/vans_":
            selItem=="효진"?"./images/gallery/":"") + 
            selData[gNo].idx + ".jpg"}
          alt="반스신발"
          style={{ width: "100%" }}
        />
      </li>
      <li
        style={{
          lineHeight: "2",
          padding: "10px",
          textAlign: "left",
        }}
      >
        상품명 : {selData[gNo].gname}
        <br />
        가격 : {selData[gNo].gprice}
        <br />
        {
        // [ 리액트 조건 출력하기 ]
        selItem=="공유" &&
        // 코드를 가져올때 최상위를 만들어서
        // 가져오면 쉽게 셋팅할 수 있다!!!
        <div>
          소재 : {selData[gNo].소재}
          <br />
          색상 : {selData[gNo].색상}
          <br />
          치수 : {selData[gNo].치수}
          <br />
          제조자/수입자 :{selData[gNo]["제조자/수입자"]}
          <br />
          제조국 : {selData[gNo].제조국}
          <br />
          제조연월 : {selData[gNo].제조연월}
          <br />
          A/S 책임자와 전화번호 : <br />
          {selData[gNo]["A/S 책임자와 전화번호"]}
          <br />
          Model : {selData[gNo].Model}
          <br />
        </div>
        }
        <div
          className="btnbx"
          style={{
            textAlign: "right",
            padding: "15px",
          }}
        >
          <button
            onClick={() => backList(true)}
            style={{
              fontSize: "24px",
            }}
          >
            리스트로 가기
          </button>
        </div>
      </li>
    </ol>
  );
} ////////// GoodsDetail 컴포넌트 //////////
