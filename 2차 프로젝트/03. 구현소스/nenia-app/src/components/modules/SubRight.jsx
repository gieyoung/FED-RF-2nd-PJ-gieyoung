// 슬로건 컴포넌트
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// 슬로건 데이터 불러오기
import { subRightData } from "../data/sub_right";

// js불러오기
import rightFn from "../func/right_scroll";

function SubRight(props) {
  useEffect(() => {
    rightFn();
  }, []);

  // 코드 리턴구역 /////////
  return (
    <>
      {/* <li>
          <h2 className="font-3">
            <span>NON-GMO 원료</span>만을 <br />
            엄선하여 사용합니다
          </h2>
          <img className="non-active" src="http://nenia.kr/theme/responsive_nenia/include/img/s11_6_img1.png" alt="" />
          <p className="font-6">
            수입산 옥수수전분, 물엿, 변성전분, 대두단백, <br />
            액상과당 등 GMO우려가 있는 원재료는 사용하지 <br />
            않습니다. 복합 원재료의 경우도 원료 자체에 <br />
            GMO의 위험이 있는 것은 배제합니다.
          </p>
        </li> */}

      <ul>
        {/* 메인4 데이터 배열로 만들기 */}
        {subRightData.map((v, i) => (
          <li key={i}>
            <h2 className="font-3">{v.tit}</h2>
            <img className="non-active" src={v.img} alt="" />
            <p className="font-6">{v.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SubRight;
