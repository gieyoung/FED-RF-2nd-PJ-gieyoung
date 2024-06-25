import React, { Fragment } from "react";

// 연혁 데이터 불러오기
import { historyData } from "../data/history";

function History() {
  // 객체 키배열을 역순으로 정렬후 데이터 적용!
  const selData = Object.keys(historyData).sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
  console.log("키배열:", selData);

  // 코드 리턴구역 /////////
  return (
    <>
      <div className="wrap">
        {/* 왼쪽이미지 영역 */}
        <div className="left">
          <div className="bak"></div>
        </div>
        {/* 오른쪽 텍스트 영역 */}
        <div className="right">
          <div className="right-wrap">
            <h1 className="font-2">네니아 연혁</h1>
            <div className="history">
              {/* 데이터 배열로 만들기 */}
              {selData.map((v, i) => (
                <Fragment key={i}>
                  {/* 년도 */}
                  <h2 className="font-2">{v}</h2>
                  <ul className="con">
                    {historyData[v].map((v, i) => (
                      <li key={i} className="font-6">
                        {/* 월 */}
                        <h3 className="font-6">{v.mon}</h3>
                        {/* 한 일 */}
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
