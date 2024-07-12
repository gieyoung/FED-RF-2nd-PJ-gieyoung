// 슬로건 컴포넌트
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// 슬로건 데이터 불러오기
import { subRightData } from "../data/sub_right";

// css불러오기
import "../../css/sright_scroll.scss";

// js불러오기
import srightFn from "../func/sright_scroll";

function SubRight({ clsName }) {
  useEffect(() => {
    // 가로스크롤 함수 호출
    srightFn();
  }, []);

  // 불러온 데이터 변수할당
  const selData = subRightData[clsName];

  // console.log(subRightData, clsName, selData);

  // 코드 리턴구역 /////////
  return (
    
    <>
      <ul>
        {/* 데이터 배열로 만들기 */}
        {selData.map((v, i) => (
          <li key={i}>
            <h2 className="font-3">{v.tit}</h2>
            <div className="img-wrap"><img src={process.env.PUBLIC_URL+v.img} alt="이미지" /></div>
            <p className="font-6">{v.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SubRight;
