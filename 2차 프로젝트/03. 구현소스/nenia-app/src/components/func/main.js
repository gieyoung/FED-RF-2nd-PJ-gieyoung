// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 가로 사이즈 변하는 js불러오기
import "../func/width_chg.js";

export default function mainFn() {
  $(".btn>a").on("click", () => {
    $(".vid-popup").addClass("on");
    $(".close-btn").show();
    $("#s11_video").get(0).play();
  });
  $(".close-btn").on("click", () => {
    $(".vid-popup").removeClass("on");
    $(".close-btn").hide();
    $("#s11_video").get(0).pause();
  });
}
