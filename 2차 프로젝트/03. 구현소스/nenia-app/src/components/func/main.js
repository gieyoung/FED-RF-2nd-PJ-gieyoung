// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


// 가로 사이즈 변하는 js불러오기
import "../func/width_chg.js";
// 뒤에 배경 움직이는 js불러오기
import "../plugin/back_move.js";


///////////[ main2 동영상 열고 닫기 ]/////////////
export default function mainFn() {
  $(".btn>a").on("click", () => {
    $(".vid-popup").addClass("on");
    $(".close-btn").show();
    $("#video").get(0).play();
  });
  $(".close-btn").on("click", () => {
    $(".vid-popup").removeClass("on");
    $(".close-btn").hide();
    $("#video").get(0).pause();
  });
}
////////////////////////////////////////////////////////////////











