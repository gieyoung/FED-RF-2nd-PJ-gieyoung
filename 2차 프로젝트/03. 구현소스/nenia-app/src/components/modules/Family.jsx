import React, { useEffect } from "react";

// 데이터 불러오기
import { familyData } from "../data/family";

// js불러오기
import familyFn from "../func/call_myself";

function Family(props) {
  useEffect(() => {
    // 무한스크롤 재귀함수 호출
    familyFn();
  }, []);
  return (
    <>
      <div className="inbox">
        <h1 className="font-2">
          네니아는 국내 친환경 온/오프라인몰과
          <br />
          파트너쉽을 유지하고 있습니다.
        </h1>
      </div>

      <div className="family">
        <div className="gbox">
          <ul>
            {/* 데이터 배열로 만들기 */}
            {familyData.map((v, i) => (
              <li key={i} className="flex">
                <a href={v.link} title={v.title} target="_blank">
                  <img src={v.img} alt={v.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Family;
