import React from "react";

import { Link } from "react-router-dom";

// 슬로건 컴포넌트 ///
import Slogan from "../modules/Slogan.jsx";

// 스토어리스트 데이터 불러오기
import { storeListData } from "../data/store_list";

// 스토어리스트 CSS 불러오기
import "../../css/store_list.scss";

// 스토어리스트 JS 불러오기
import "../plugin/store_list.js";

function StoreList(props) {
  // 코드 리턴구역 /////////
  return (
    <div className="store-list">
      {/* 왼쪽 이미지 리스트 영역 */}
      <ul className="left list">
        {storeListData.map((v, i) => (
          <li
            key={i}
            className={v.clsName}
            style={{
              backgroundImage: `url(${v.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {v.product}
          </li>
        ))}
      </ul>
      {/* 오른쪽 글자 리스트 영역 */}
      <div className="right list">
        <ul>
          <li>
            {/* 슬로건 모듈 */}
            <Slogan clsName="storeList" />
          </li>

          {/* 스토어리스트 데이터 배열로 만들기 */}
          {storeListData.map((v, i) => (
            <li key={i} className={v.clsName}>
              <h2 className="font-2">{v.product}</h2>
              <p className="font-6">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StoreList;
