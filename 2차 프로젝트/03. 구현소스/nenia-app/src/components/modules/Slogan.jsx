// 슬로건 컴포넌트
import React from "react";
import { Link } from "react-router-dom";

// 슬로건 데이터 불러오기
import { sloganData } from "../data/slogan";

function Slogan({ clsName }) {
  // 불러온 데이터 변수할당
  const selData = sloganData[clsName];
  // console.log(selData);

  // 코드 리턴구역 /////////
  return (
    <>
      <h1 className="font-5">{selData.stit}</h1>
      <p className="font-2">
        <span>{selData.btit}</span>
      </p>
      <div className="btn">
        <Link to={selData.link} className="po-center">
          {selData.more}
        </Link>
      </div>

      <div className="desc">
        <p className="font-6">{selData.desc}</p>
      </div>
    </>
  );
}

export default Slogan;
