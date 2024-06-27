// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);



export default function rightFn() {

$(function () {
  
    var right_scroll = gsap.timeline({
      scrollTrigger:{
        trigger:'.horizon-scroll',
        scrub:1,
        // scrub은 스크롤 속도에 따라 애니메이션을 부드럽게 적용하도록 설정
        start:'top 0',
        end: 'bottom -150%',
        pin:true,
        // pin은 요소를 스크롤 시 고정시킴
        toggleActions: 'play none none none',
      }
    });
    right_scroll.to('.horizon-scroll ul', {
      xPercent: -160,
      ease: "none",
    });

});
}