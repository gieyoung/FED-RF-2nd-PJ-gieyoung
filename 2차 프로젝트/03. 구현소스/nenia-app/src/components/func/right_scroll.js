// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

var windowWidth = window.matchMedia("screen and (min-width:1200px)");

export default function rightFn() {
  // 디바이스 크기가 1200px 이상일 때 실행되도록 조건을 설정
  if (windowWidth.matches) {
    $(function () {
      var right_scroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".horizon-scroll",
          scrub: 1,
          start: "top 0",
          end: "bottom -150%",
          pin: true,
          toggleActions: "play none none none",
        },
      });
      right_scroll.to(".horizon-scroll ul", {
        xPercent: -160,
        ease: "none",
      });
    });
  }
}
