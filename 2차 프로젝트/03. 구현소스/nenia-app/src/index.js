import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";



// 전체 공통 CSS 불러오기
import "../src/css/main.scss";

export default function MainComponent() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>

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
