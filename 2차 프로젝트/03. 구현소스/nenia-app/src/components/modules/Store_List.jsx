import React, { useContext, useEffect, useRef } from "react";
import { dCon } from "../modules/dCon";

// 데이터 불러오기
import { sbread, srice, smando, sicecream } from "../data/store_data.js";

// 공통함수 불러오기
// import { addComma } from "../func/common_fn.js";

// CSS 불러오기
import "../../css/store.scss";



export default function Store_List({ selData, viewDetail, updateIdx, selItem, setSearchVisible, searchWord }) {
  // 스토어리스트 데이터 모으기(브레드, 떡, 만두, 아이스크림)
  // const selData = [...sbread, ...srice, ...smando, ...sicecream];
  // (1) viewDetail - 부모컴포넌트가 전달해준 상태변수
  // (viewList를 업데이트하는 setViewList메서드임!)
  // (2) updateIdx - 부모컴포넌트의 setIdx 상태관리변수의 메서드

  // 컨텍스트 사용
  const myCon = useContext(dCon);
  

  // 원본 데이터
  const orgData = [...sbread, ...srice, ...smando, ...sicecream];

  const tempData = useRef(selData);

  if (tempData.current != orgData) {
    tempData.current = selData;
  }

  console.log("비교데이터:", tempData.current);

  // 선택코드에 따른 데이터 선택하기
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
  console.log("선택된 카테고리의 데이터", storeData);

  // 검색어 하이라이트 처리
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };


    // 페이지 로드 시 스크롤 위치 800px로 이동
    useEffect(() => {
      window.scrollTo(0, 800);
    }, []);

    // 클릭 시 idx 값을 출력하는 함수
  const ItemClick = (idx) => {
    console.log("클릭된 상품의 idx:", idx);
    // 필요한 추가 작업을 여기에 추가
  };

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

                ItemClick(v.idx); // idx 값 전달
                // // // 상세페이지의 상품 컨텍스트 변수 변경
                // myCon.setIdx(Number(v.idx) - 1);
                // // // 상세페이지 보기 상태값 변경
                // myCon.setViewList(false);
                myCon.setSelProductData(storeData);
                console.log(myCon.selProductData);
              }}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL+v.isrc})`,
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
                viewDetail(false);
                // setIdx메서드가 updateIdx로 들어옴
                updateIdx(i);

                ItemClick(v.idx); // idx 값 전달
                // // // 상세페이지의 상품 컨텍스트 변수 변경
                // myCon.setIdx(Number(v.idx) - 1);
                // // // 상세페이지 보기 상태값 변경
                // myCon.setViewList(false);
                myCon.setSelProductData(storeData);
                console.log(myCon.selProductData);
              }}
            >
              <dt className="subject">
                <span className="font-6">{highlightText(v.tit, searchWord)}</span>
              </dt>
              <dd className="content font-7 nanum">{v.disprice}원</dd>
            </a>
          </dl>
        </li>
      ))}


      
    </>
  );
}
