import React, { Fragment } from "react";

// 연혁 데이터 불러오기
import { historyData } from "../data/history";

function History() {
  console.log("나야나", historyData);

  // 객체 키배열을 역순으로 정렬후 데이터 적용!
  const selData = Object.keys(historyData).sort((a,b)=>a>b?-1:a<b?1:0);
  console.log("키배열:",selData);

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
            <div className="history">
              {/* 데이터 배열로 만들기 */}
              {selData.map((v, i) => (
                <Fragment key={i}>
                  <h2 className="font-2">{v}</h2>
                  <ul className="sub_history">
                    {historyData[v].map((v, i) => (
                      <li key={i} className="font-6 nanum">
                        <h3 className="year font-6">{v.mon}</h3>
                        <p className="font-6">{v.desc}</p>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
