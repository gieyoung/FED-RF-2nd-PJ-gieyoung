import React, { useContext, useEffect, useRef } from "react";
import { dCon } from "../modules/dCon";

// 데이터 불러오기

import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 공통함수 불러오기
import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store_detail.scss";

// 제이쿼리
import $ from "jquery";

export default function Store_detail({ backList, gNo, selItem, loginSts, setSearchVisible }) {
  // (1) backList - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) gNo - 상품 데이터 배열순번
  // (idx 상태관리변수가 전달됨 - 이 값 변경시 컴포넌트 변경됨)
  // tot - 상품토탈정보
  // setTot - 상품토탈정보 업데이트함수

  // 전역 카트 사용여부값 업데이트 사용위해 전역 컨텍스트 사용
  const myCon = useContext(dCon);

  // 스토어리스트 데이터 모으기(브레드, 떡, 만두, 아이스크림)
  const selData = [...sbread, ...srice, ...smando, ...sicecream];

  // 원본 데이터
  const orgData = [...sbread, ...srice, ...smando, ...sicecream];

  const tempData = useRef(selData);

  if (tempData.current != orgData) {
    tempData.current = selData;
  }

  console.log("비교데이터:", tempData.current);

  // 카테고리에 따른 데이터 선택하기
  let storeData;

  if (selItem == "전체보기") {
    storeData = tempData.current != orgData && selData;
  } else if (selItem == "브레드") {
    storeData = sbread;
  } else if (selItem == "떡") {
    storeData = srice;
  } else if (selItem == "만두") {
    storeData = smando;
  } else if (selItem === "아이스크림") {
    storeData = sicecream;
  }
  // console.log("storeData:", storeData, "gNo:", gNo, "selData[gNo]:", selData[gNo], "storeData[gNo]:", storeData[gNo], "storeData[gNo].disprice:", storeData[gNo].disprice);

  // 화면랜더링구역 : 한번만 //////////
  useEffect(() => {
    //  검색창 안보이게 하기
    setSearchVisible(false);

    // [ 수량증감 버튼클릭시 증감기능구현 ]

    // 1. 대상요소 ///////
    // (1) 숫자출력 input
    const sum = $("#sum");
    // (2) 수량증감 이미지버튼
    const numBtn = $(".chg_num");
    // (3) 총합계 요소
    const total = $("#total");

    // 2. 수량증감 이벤트함수 ///
    numBtn.on("click", (e) => {
      // (1) 이미지순번(구분하려고)
      // 클릭된 이미지 버튼의 부모 요소를 기준으로 인덱스 구하기
      let seq = $(e.target).index();
      // let seq = $(e.currentTarget).index();
      console.log("버튼순번:", seq, e.target, e.currentTarget);
      // 0은 증가 / 1은 감소

      // (2) 기존 숫자값 읽기
      let num = Number(sum.val());
      console.log("현재숫자:", num);

      // (3) 증감반영하기(0은 false,1은 true 처리)
      sum.val(seq == 0 ? ++num : num == 1 ? 1 : --num);
      // seq가0이냐?그럼 증가:아니면 (num이 1이냐)
      // 그럼1 아니면 감소 -> num이 1이하면 안되니까!
      // 증감기호가 변수 앞에 있어야 먼저증감하고 할당함!

      // (4) 총합계 반영하기
      const totalPrice = parseInt(storeData[gNo].disprice[0].replace(",", ""), 10) * num + "원";

      total.text(addComma(totalPrice));

      console.log("나야나", storeData[gNo]);
      // console.log("나야나", totalPrice);
    }); //////// click ////////
  }, []); /// 현재컴포넌트 처음생성시 한번만 실행구역 ///

  // [ 화면랜더링구역 : 매번 ] ///
  useEffect(() => {
    // 매번 리랜더링 될때마다 수량초기화!
    // $("#sum").val(1);
    // // 총합계 초기화
    // $("#total").text(selData[gNo].disprice[0] + "원");

    // 페이지 로드 시 스크롤 위치 800px로 이동
    window.scrollTo(0, 800);
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
                  <span>{storeData[gNo].disprice}원</span>
                  <span className="price">
                    {/* 정가 */}
                    {storeData[gNo].price}
                  </span>
                </span>
              </div>
              {/* 보관법 */}
              <div className="product-order-list product-point">
                <span>보관법</span>
                <span className="point-right">{storeData[gNo].method}</span>
              </div>
              {/* 구매수량 */}
              <div className="product-order-list">
                <span>구매수량</span>
                <span>
                  {/* 카운트 박스 */}
                  <input className="count-box" type="text" id="sum" defaultValue="1" />
                  <b className="chg_num">
                    <img src={process.env.PUBLIC_URL + "/images/cnt_up.png"} alt="증가" />
                    <img src={process.env.PUBLIC_URL + "/images/cnt_down.png"} alt="감소" />
                  </b>
                </span>
              </div>
            </div>

            <div className="product-ordered-box"></div>
            <div className="total-price-box">
              <span>총 합계</span>
              {/* 총합계 */}
              <span id="total">
                {/* 갯수1일때 가격 */}
                {storeData[gNo].disprice}원
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    paddingLeft: "5px",
                  }}
                ></span>
              </span>
            </div>
            <div className="product-btns">
              <button
                className="buy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  // 로그인 상태가 null일 때
                  if (loginSts === null) {
                    alert("로그인이 필요한 서비스입니다");
                  }
                  // 로그인 상태일 때
                  else {
                    alert("현재 지원하지 않는 서비스입니다");
                  }
                }}
              >
                구매하기
              </button>
              <button
                className="cart-btn"
                onClick={(e) => {
                  e.preventDefault();
                  // [ 로컬스 카트 데이터 넣기 ]
                  // 1. 로컬스 없으면 만들어라!
                  if (!localStorage.getItem("cart-data" + myCon.addUid())) {
                    localStorage.setItem("cart-data" + myCon.addUid(), "[]");
                  } //// if /////

                  // 2. 로컬스 읽어와서 파싱하기
                  let locals = localStorage.getItem("cart-data" + myCon.addUid());
                  locals = JSON.parse(locals);

                  // idx값만 모아서 다른 배열만들기
                  let newLocals = locals.map((v) => v.idx);
                  console.log("idx새배열:", newLocals);

                  // 중복 확인을 위한 idx 값을 설정
                  let currentIdx = storeData[gNo].idx; //확인하려는 현재 상품의 idx 값이어야 함

                  console.log("idx값", currentIdx);

                  // 인클루드 비교
                  let retSts = newLocals.includes(currentIdx);

                  console.log("중복상태:", retSts);
                  if (retSts) {
                    // 메시지 보이기
                    alert("이미 선택하신 상품입니다!");
                    // 함수 나가기
                    return;
                  } ///// if //////
                  else {
                    // 메시지 보이기
                    alert("장바구니에 담겼습니다!");
                  }

                  // 4.로컬스에 객체 데이터 추가하기
                  locals.push({
                    idx: storeData[gNo].idx,
                    cat: storeData[gNo].catname,
                    gtit: storeData[gNo].tit,
                    cnt: $("#sum").val(),
                    price: storeData[gNo].disprice,
                    img: storeData[gNo].isrc,
                  });
                  /************************** 
                    [데이터 구조정의]
                    1. idx : 상품고유번호
                    2. cat : 카테고리
                    3. gtit : 상품명
                    4. cnt : 상품개수
                    5. price : 가격
                    6. img: 상품 이미지
                  **************************/

                  // 로컬스에 문자화하여 입력하기
                  localStorage.setItem("cart-data" + myCon.addUid(), JSON.stringify(locals));

                  // 로컬스 카트데이터 상태값 변경!
                  myCon.setLocalsCart(localStorage.getItem("cart-data" + myCon.addUid()));
                  // 카트리스트 생성 상태값 변경!
                  myCon.setCartSts(true);
                }}
              >
                장바구니
                <br /> 담기
              </button>
              <button
                onClick={() =>
                  // CartList 페이지로 이동
                  myCon.goPage("/cart")
                }
              >
                장바구니
                <br />
                이동
              </button>
              <button
                className="list-btn"
                onClick={() => {
                  backList(true);
                  // 검색창 보이게 하기
                  if (selItem == "전체보기") {
                    setSearchVisible(true);
                  } else {
                    setSearchVisible(false);
                  }
                }}
              >
                상품 리스트
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
