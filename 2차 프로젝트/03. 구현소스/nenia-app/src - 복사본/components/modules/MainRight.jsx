// 슬로건 컴포넌트
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// 슬로건 데이터 불러오기
import { mainRightData } from "../data/main_right";

// js불러오기
import rightFn from "../func/right_scroll";

function MainRight(props) {
  useEffect(() => {
    rightFn();
  }, []);

  // 코드 리턴구역 /////////
  return (
    <>
      {/* 메인4 데이터 배열로 만들기 */}
      {mainRightData.map((v, i) => (
        <li key={i} className="flex">
          <Link to={v.link} className="img_box" target="_blank">
            <img src={process.env.PUBLIC_URL+v.img} alt={v.link} />
          </Link>
          <h1 className="font-3">{v.tit}</h1>
          <div className="btn">
            <Link to={v.link} className="po-center">
              바로가기
            </Link>
          </div>
        </li>
      ))}
    </>
  );
}

export default MainRight;
