// 메인3 이미지 컴포넌트

import React from "react";

// 메인3이미지 데이터 가져오기
import { m3_img } from "../data/m3_img";

function M3_img(props) {
  // 코드 리턴구역 /////////
  return (
    <>
      {/* 메인3 이미지 데이터 배열로 만들기 */}
      {m3_img.map((v, i) => (
        <li key={i}>
          <img src={v.img} alt={v.alt} />
        </li>
      ))}
    </>
  );
}

export default M3_img;
