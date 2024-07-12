import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Way from "./components/pages/Way";
import Wheat from "./components/pages/Wheat";
import Nenia from "./components/pages/Nenia";
import EcoMeal from "./components/pages/EcoMeal";
import Bread from "./components/pages/Bread";
import Store from "./components/pages/Store";
import Store1 from "./components/pages/Store1";
import Store2 from "./components/pages/Store2";
import Store3 from "./components/pages/Store3";
import Store4 from "./components/pages/Store4";
import Store5 from "./components/pages/Store5";
import Member from "./components/pages/Member";

// 전체 공통 CSS 불러오기
import "../src/css/main.scss";

export default function MainComponent() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* 라우터 경로 변경시 최상단이동 컴포넌트 */}
      {/* <ScrollTop /> */}
      <Routes>
        {/* 레이아웃 컴포넌트를 루트로 설정!
        루트 Route 는 홀로닫지말고 반드시 다른
        하위 라우트를 감싸도록한다!!! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path설정대신 index키워드를 쓰면 
        첫페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에
        출력된다!*/}
          <Route index element={<Main />} />
          <Route path="/way" element={<Way />} />
          <Route path="/wheat" element={<Wheat />} />
          <Route path="/nenia" element={<Nenia />} />
          <Route path="/ecomeal" element={<EcoMeal />} />
          <Route path="/bread" element={<Bread />} />
          <Route path="/store" element={<Store />} />
          <Route path="/member" element={<Member />} />
          <Route path="/브레드" element={<Store1 />} />
          <Route path="/store2" element={<Store2 />} />
          <Route path="/store3" element={<Store3 />} />
          <Route path="/store4" element={<Store4 />} />
          <Route path="/store5" element={<Store5 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/******************************************* 
  컴포넌트로 만들고 라우터 안에 넣고
  라우터 경로변경시 스크롤 최상단이동
*******************************************/
const ScrollTop = () => {
  // 라우터 경로 변경시 path 값 읽어오기
  // pathname 객체 속성에 담긴다!
  const { pathname } = useLocation();

  // 화면랜더링 구역에 스크롤상단이동 코드넣기
  useEffect(() => {
    // 스크롤 최상단 이동
    window.scrollTo(0, 0);
    // 변경된 라우터 경로값 확인
    console.log("라우터경로:", pathname);
  }, [pathname]);
  // 의존성을 라우터 경로 변수로 설정한다!

  // 컴포넌트 리턴이 필요하나
  // 소스리턴이 아니므로 null를 쓴다
  return null;
}; /////////// ScrollTop 컴포넌트 ////////////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
