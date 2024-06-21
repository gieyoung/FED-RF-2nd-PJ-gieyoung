import React from "react";

// 연혁 데이터 불러오기
import { historyData } from "../data/history";

function History(props) {
  console.log(historyData);

  // 코드 리턴구역 /////////
  return (
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
              <div className="sub_history">
                <h2 className="font-2">{v.year}</h2>
                <li className="font-6 nanum">
                  <h3 className="year font-6">3월</h3>
                  <p className="font-6">1PL 자사 물류 전환</p>
                </li>
              </div>
            ))}
            {/* <div className="sub_history">
              <h2 className="font-2">2023</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">3월</h3>
                <p className="font-6">1PL 자사 물류 전환</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2022</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">사단법인 경기장애인부모연대 양평지부 후원</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">7월</h3>
                <p className="font-6">직수입 시작 (Non-GMO 냉압착 유채유)</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">9월</h3>
                <p className="font-6">우리밀 제빵 제조공장 HACCP 시설 인증</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">'네니아 브레드' 유기농 우리밀 천연발효종빵 오픈</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">꽃밥마켓, 보자기꽃밥 -&gt; '꽃밥에피다 북촌 친환경 그로서란트' 변경</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">'꽃밥에피다' 미쉐린 빕구르망 2023 선정(6년 연속)</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">'꽃밥에피다' 미쉐린 그린스타 2023 선정(3년 연속)</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2021</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">2월</h3>
                <p className="font-6">월드비전 결식아동을 위한 ‘아침머꼬 친환경 간식 키트’ 공급 및 후원</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">3월</h3>
                <p className="font-6">경기도&amp;인천 친환경급식센터 친환경 제품 공급</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">7월</h3>
                <p className="font-6">경기도 양평군 본사 사옥 이전 (경기도 양평군 강상면 강남로 1532-9)</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">유기농 우리밀 천연발효종빵 파베이크 공방 설비</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">11월</h3>
                <p className="font-6">기술혁신형 중소기업(INNO-BIZ) 인증</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">‘꽃밥에피다’미쉐린 빕구르망 2022 5년 연속 선정</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">‘꽃밥에피다’ 미쉐린 그린스타 2022 2년 연속 선정</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2020</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">KIM' C 마켓 상품판매 계약 (미국 LA, NEWYORK)</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">3월</h3>
                <p className="font-6">전라남도 광주 친환경 급식센터를 통해 광주 전역에 친환경 간식꾸러미 납품</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">5월</h3>
                <p className="font-6">(주)초록마을 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">8월</h3>
                <p className="font-6">꽃밥이야기(꽃 밥에피다, 보자기꽃밥, 꽃밥마켓) 외식사업 법인 독림</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">"꽃, 밥에피다" 미쉐린 빕구르망 2021 4년 연속 선정</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">"꽃, 밥에피다" 미쉐린 그린스타 2021 최초 선정</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">11월</h3>
                <p className="font-6">밀구루 삼성점 상품계약 판매</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">12월</h3>
                <p className="font-6">더현대서울 상품판매 계약</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2019</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">기술혁신형 중소기업 (INNO-BIZ) 인증</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">ISO 9001 인증 (인증범위: 만두류, 면류, 빵류, 후식류, 음료류의 설계, 개발, 제조 및 판매)</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">농공상융합형 중소기업 인증</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">4월</h3>
                <p className="font-6">쿠팡 FRESH 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">9월</h3>
                <p className="font-6">GS RRESH 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">GS ORGANIC "달리살다" 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">"꽃, 밥에피다" 3년 연속 2020 빕구르망 선정</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">11월</h3>
                <p className="font-6">우아한형제들(배달의민족) 상품판매계약</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2018</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">"꽃, 밥에피다" 2년 연속 미슐랭 2019 빕구르망 선정</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">11월</h3>
                <p className="font-6">네니아 연구개발전담부서 인증</p>
              </li>
            </div>
            <div className="sub_history">
              <h2 className="font-2">2017</h2>
              <li className="font-6 nanum">
                <h3 className="year font-6">1월</h3>
                <p className="font-6">농협식품센터, 용인시 급식센터 급식 납품계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">8월</h3>
                <p className="font-6">네니아 ERP개발</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">8월</h3>
                <p className="font-6">헬로우네이쳐 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">9월</h3>
                <p className="font-6">이마트 상품판매 계약</p>
              </li>
              <li className="font-6 nanum">
                <h3 className="year font-6">10월</h3>
                <p className="font-6">"꽃, 밥에피다" 친환경 한식 최초 미슐랭 2018 빕구르망 선정</p>
              </li>
            </div> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
