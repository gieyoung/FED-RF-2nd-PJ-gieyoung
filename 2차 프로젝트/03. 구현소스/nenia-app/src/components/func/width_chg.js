// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

var windowWidth = window.matchMedia("screen and (max-width:900px)");

$(function () {
  if (windowWidth.matches) {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main2",
        scrub: 1,
        start: "top 76%",
        end: "top 40%",
        toggleActions: "play none none none",
      },
    });
    tl.to(".main2", {
      borderRadius: "0 0 20px 20px",
      width: "100%",
      top: 0,
    });
  } else {
    //PC
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main2",
        scrub: 1,
        start: "top 100%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });
    tl.to(".main2", {
      borderRadius: "0",
      width: "100%",
      top: 0,
    });
  }
});
