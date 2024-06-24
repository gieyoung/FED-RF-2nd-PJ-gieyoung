import React from "react";
import { Link } from "react-router-dom";

// 데이터 불러오기
import { lastData } from "../data/sub_last";

// CSS 불러오기
import "../../css/sub_last.scss";

function SubLast({clsName}) {
  // 불러온 데이터 변수할당
  const selData = lastData[clsName];

  // 코드 리턴구역 /////////
  return (
    <>
      <h1 className="font-4">{selData.btit}</h1>
      <p className="font-6">{selData.stit}</p>
      <a>
        <div className="btn">
          <Link to={selData.link} className="po-center">
            {selData.more}
          </Link>
        </div>
      </a>
    </>
  );
}

export default SubLast;
