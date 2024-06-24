import React from "react";

// 연혁 데이터 불러오기
import { historyData } from "../data/history";

function History(props) {
  console.log(historyData);

  // 코드 리턴구역 /////////
  return (
    <>
      <div className="wrap">
        <div className="left">
          <div className="bak"> </div>
        </div>
        <div className="right">
          <div className="right_wrap">
            <h1 className="font-2">네니아 연혁</h1>
            <ul className="history">
              {/* 데이터 배열로 만들기 */}
              {historyData.map((v, i) => (
                <div key={i} className="sub_history">
                  <h2 className="font-2">{v.year}</h2>
                  <li className="font-6 nanum">
                    <h3 className="year font-6">{v.mon}</h3>
                    <p className="font-6">{v.desc}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
