// 네니아웨이 함수 - way.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function neniaFn() {

    var tl = gsap.timeline({
      top: "0",
      scrollTrigger: {
        trigger: ".sec2",
        scrub: 1,
        start: "top 0%",
        end: "bottom -200%",
        pin: true,
        // markers:true,
       
      },
    });
    tl.to(".sec2 ul", {
      yPercent: -90,
      ease: "none",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2",
        scrub: 1,
        start: "top 0%",
        end: "bottom -200%",
        
      },
    });
    tl.to(".sec2 .right", {
      backgroundPosition: "50% 100%",
    });

}
