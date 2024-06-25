// 사각정보 컴포넌트 ///
import React, { useEffect } from "react";

// 데이터 불러오기
import { squareData } from "../data/square_info";

// css불러오기
import "../../css/square_info.scss";

// js불러오기
import widthFn from "../func/width_chg.js";

function SquareInfo({ catName }) {
  // 불러온 데이터 변수할당
  const selData = squareData[catName];


  useEffect(() => {
    // 가로 크기 변하는 함수 호출
    widthFn();
  }, []);
  // 코드 리턴구역 /////////
  return (
    <>
      {/* 첫번째 사각 영역 */}
      <div className="box s1 width-chg">
        <div className="left">
          <img src={selData.img1} alt={selData.alt1}></img>
        </div>
        <div className="right">
          <h1 className="font-2">{selData.tit1}</h1>
          <p className="font-6">{selData.desc1}</p>
        </div>
      </div>


      {/* 두번째 사각 영역 */}
      <div className="box s2">
        <div className="right">
          <h1 className="font-2">{selData.tit2}</h1>
          <p className="font-6">{selData.desc2}</p>
        </div>
        <div className="left">
          <img src={selData.img2} alt={selData.alt2}></img>
        </div>
      </div>


      {/* 세번째 사각 영역 - catName이 wheat일때만 출력*/}
      { catName == "wheat" && (
      <div className="box s3">
        <div className="left">
          <img src={selData.img3} alt={selData.alt3}></img>
        </div>
        <div className="right">
          <h1 className="font-2">{selData.tit3}</h1>
          <p className="font-6">{selData.desc3}</p>
        </div>
      </div>
      )
      }
    </>
  );
}

export default SquareInfo;
