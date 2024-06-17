// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

var windowWidth = window.matchMedia("screen and (min-width: 1200px)");

// 가로 1200px이상에서만 가로스크롤이벤트 적용

$(function () {
  if (windowWidth.matches) {
    var right_scroll = gsap.timeline({
      scrollTrigger:{
        trigger:'.main4',
        scrub:1,
        // scrub은 스크롤 속도에 따라 애니메이션을 부드럽게 적용하도록 설정
        start:'top 0',
        end: 'bottom -150%',
        pin:true,
        // pin은 요소를 스크롤 시 고정시킴
        toggleActions: 'play none none none',
      }
    });
    right_scroll.to('.main4 ul', {
      xPercent: -190,
      ease: "none",
    });
  }
});