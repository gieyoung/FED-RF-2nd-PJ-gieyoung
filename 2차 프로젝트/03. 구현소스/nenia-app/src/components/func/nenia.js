// 네니아웨이 함수 - way.js

// 제이쿼리 + 제이쿼리UI
// import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function neniaFn() {

    var rowscroll = gsap.timeline({
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
    rowscroll.to(".sec2 ul", {
      yPercent: -90,
      ease: "none",
    });

    var rowscroll2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2",
        scrub: 1,
        start: "top 0%",
        end: "bottom -200%",
        
      },
    });
    rowscroll2.to(".sec2 .right", {
      backgroundPosition: "50% 100%",
    });

}
