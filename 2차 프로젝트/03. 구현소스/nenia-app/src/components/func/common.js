// 공통 기능함수 - common.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 나의 함수 불러오기
import mFn from "../func/my_function.js";

// console.log(mFn);

///////////[ 헤더 1단메뉴 마우스 오버시 2단메뉴 내려오기 ]/////////////
export default function commonFn() {
  if ($(window).width() >= 760) {
    $(".gnb-depth1").hover(
      function () {
        $(this).find(".gnb-depth2").addClass("on");
      },
      function () {
        $(this).find(".gnb-depth2").removeClass("on");
      }
    );
  } else {
    $(".gnb-depth1").off("hover"); // 1200px 미만일 때 hover 이벤트 제거
  }

  $(window).scroll(function () {
    // 스크롤 100px이상되면 탑메뉴 나오고 그밖에 숨김
    if ($(this).scrollTop() > 300) {
      $(".top-area").fadeOut();
    } else {
      $(".top-area").fadeIn();
    }
  });

  /****************************************************
     [ 모바일 메뉴 버튼 ]
******************************************************/

// 1. 대상선정
// 모바일에서 메뉴 li요소
const nav = mFn.qsa("#top-area .nav-wrap #nav li a");
console.log("나야나",nav);
const $nav = $(nav);

  $(".m_btn").click(function () {
    $(".m_btn").toggleClass("on");
    $(".hidden").toggleClass("on");
    $("#nav").toggleClass("on");
  });

  $nav.click(function () {
    $(".m_btn").toggleClass("on");
    $(".hidden").toggleClass("on");
    $("#nav").toggleClass("on");

  });



  /****************************************************
     [ top버튼-클릭시 상단으로 이동하는 버튼]
******************************************************/

  $(".top-btn").hide(); // 탑 버튼 숨김
  $(window).scroll(function () {
    // 스크롤 100px이상되면 탑버튼 나오고 그밖에는 탑버튼 숨김
    if ($(this).scrollTop() > 100) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });

  $(".top-btn").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0, //탑 설정 클수록 덜올라간다
      },
      1000
    ); // 탑 이동 스크롤 속도
    return false;
  });
}

////////////////////////////////////////////////////////////////
