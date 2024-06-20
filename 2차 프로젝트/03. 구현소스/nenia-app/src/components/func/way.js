// 네니아웨이 함수 - way.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function wayFn() {
  $(function () {
    var tl = gsap.timeline({
      top: "0",
      scrollTrigger: {
        trigger: ".sec3",
        scrub: 1,
        start: "top top",
        end: "bottom -250%",
        pin: true,
        toggleActions: "play none none none",
      },
    });
    tl.to(".sec3 ul", {
      yPercent: -95,
      ease: "none",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec3",
        scrub: 1,
        start: "top top",
        end: "bottom -250%",
        toggleActions: "play none none none",
      },
    });
    tl.to(".sec3 .right", {
      backgroundPosition: "50% 100%",
    });
  });
}
