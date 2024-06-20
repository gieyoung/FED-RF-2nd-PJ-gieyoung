import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Way from "./components/pages/Way";
import Wheat from "./components/pages/Wheat";
import Nenia from "./components/pages/Nenia";
import EcoMeal from "./components/pages/EcoMeal";
import Bread from "./components/pages/Bread";
import News from "./components/pages/News";
import Store from "./components/pages/Store";

// 전체 공통 CSS 불러오기
import "../src/css/main.scss";

export default function MainComponent() {
  return (
    <BrowserRouter>
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
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
