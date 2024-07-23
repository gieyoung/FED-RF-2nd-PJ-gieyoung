// 공통 기능함수 - common.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 나의 함수 불러오기
// import mFn from "../func/my_function.js";

// console.log(mFn);

///////////[ 헤더 1단메뉴 마우스 오버시 2단메뉴 내려오기 ]/////////////
export default function commonFn() {
  function handleResize() {
    if ($(window).width() >= 760) {
      // 760px 이상일 때 실행
      $(".gnb-depth1").hover(
        function () {
          $(this).find(".gnb-depth2").addClass("on");
        },
        function () {
          $(this).find(".gnb-depth2").removeClass("on");
        }
      );

      $(window).scroll(function () {
        // 스크롤 100px 이상되면 탑메뉴 나오고 그 밖에 숨김
        if ($(this).scrollTop() > 300) {
          $(".top-area").fadeOut();
        } else {
          $(".top-area").fadeIn();
        }
      });
    } else {
      // 760px 미만일 때 hover 이벤트 제거 및 scroll 이벤트 핸들러 제거
      $(".gnb-depth1").off("mouseenter mouseleave");
      $(window).off("scroll");
    }
  }

  // 초기 로드시 한 번 실행
  handleResize();

  // 화면 크기 변화에 따라 실행
  $(window).resize(handleResize);

// export default function commonFn() {
//   if ($(window).width() >= 760) {
//     $(".gnb-depth1").hover(
//       function () {
//         $(this).find(".gnb-depth2").addClass("on");
//       },
//       function () {
//         $(this).find(".gnb-depth2").removeClass("on");
//       }
//     );
//   } else {
//     $(".gnb-depth1").off("hover"); // 1200px 미만일 때 hover 이벤트 제거
//   }

//   $(window).scroll(function () {
//     // 스크롤 100px이상되면 탑메뉴 나오고 그밖에 숨김
//     if ($(this).scrollTop() > 300) {
//       $(".top-area").fadeOut();
//     } else {
//       $(".top-area").fadeIn();
//     }
//   });

  /****************************************************
     [ 모바일 메뉴 버튼 ]
******************************************************/

// 1. 대상선정
// 모바일에서 메뉴 li요소




  $(".m-btn").click(function () {
    $(".m-btn").toggleClass("on");
    $(".hidden").toggleClass("on");
    $("#nav").toggleClass("on");
  });




  // 760이하에서만 실행되는 함수
  //(mtn 버튼(모바일ver에서 메뉴 누르면 링크는 이동하는데 모바일 메뉴 창이 안닫혀서 강제로 닫게 해주는 것)
$(document).ready(function() {
  function handleResize() {
    if (window.innerWidth <= 760) {
      $(".mtn").off('click').on('click', function () {
        $(".m-btn").toggleClass("on");
        $(".hidden").toggleClass("on");
        $("#nav").toggleClass("on");
      });
      //(mtn2 버튼(로고, 로그인, 회원가입, 장바구니 버튼 처럼 상단에 있는 버튼은 따로 설정)
      $(".mtn2").on('click', function () {
        $(".m-btn").removeClass("on");
        $(".hidden").removeClass("on");
        $("#nav").removeClass("on");
      });
    } else {
      // 화면 크기가 760px 이상일 경우 이벤트 핸들러 제거 (선택 사항)
      $(".mtn").off('click');
    }
  }

  // 초기 로드시 한 번 실행
  handleResize();

  // 화면 크기 변화에 따라 실행
  $(window).resize(handleResize);
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
