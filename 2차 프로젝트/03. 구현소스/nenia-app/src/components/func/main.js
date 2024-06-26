// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


// // 가로 사이즈 변하는 js불러오기
// import "./width_chg.js";
// // 뒤에 배경 움직이는 js불러오기
// import "./back_move.js";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);


///////////[ main2 동영상 열고 닫기 ]/////////////
export default function mainFn() {
  $(".btn>a").on("click", () => {
    $(".vid-popup").addClass("on");
    $(".close-btn").show();
    // 동영상 열었을때 플레이됨
    $("#video").get(0).play();
  });
  $(".close-btn").on("click", () => {
    $(".vid-popup").removeClass("on");
    $(".close-btn").hide();
    // 동영상 닫았을때 플레이 멈춤
    $("#video").get(0).pause();
  });
  



}
////////////////////////////////////////////////////////////////


