// 뒤배경 움직이는 함수 - back_move.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap 플러그인 불러오기
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function backMoveFn() {
$(function(){

      
 { //PC
    var back_move = gsap.timeline({
      scrollTrigger: {
        trigger:'.back-move',
        scrub:1,
        start:'top 100%',
        end:'bottom -100%',
        toggleActions: 'play none none none',
      }
    });
    back_move.to('.back-move', {
      backgroundPosition:'50% 100%'
    })
  }
});

}

////////////////////////////////////////////////////////////////