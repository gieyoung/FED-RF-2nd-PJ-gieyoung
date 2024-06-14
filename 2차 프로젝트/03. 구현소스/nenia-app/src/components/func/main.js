// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


// 가로 사이즈 변하는 js불러오기
import "../func/width_chg.js";


///////////[ main2 동영상 열고 닫기 ]/////////////
export default function mainFn() {
  $(".btn>a").on("click", () => {
    $(".vid-popup").addClass("on");
    $(".close-btn").show();
    $("#video").get(0).play();
  });
  $(".close-btn").on("click", () => {
    $(".vid-popup").removeClass("on");
    $(".close-btn").hide();
    $("#video").get(0).pause();
  });
}
////////////////////////////////////////////////////////////////



// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);


///////////[ 스크롤됨에 따라 main3 배경 움직임 ]/////////////
var winWidth = window.matchMedia("screen and (max-width:900px)");

$(function(){
  if (winWidth.matches){
    var back_move = gsap.timeline({
      scrollTrigger: {
        trigger:'.main3',
        scrub:1,
        start:'top 100%',
        endTrigger:'bottom',
        end:'bottom -200%',
        toggleActions: 'play none none none',
      }
    });
    back_move.to('.main3', {
      backgroundPosition:'50% 100%'
    })
     
      
  }else{ //PC
    var back_move = gsap.timeline({
      scrollTrigger: {
        trigger:'.main3',
        scrub:1,
        start:'top 100%',
        end:'bottom -100%',
        toggleActions: 'play none none none',
      }
    });
    back_move.to('.main3', {
      backgroundPosition:'50% 100%'
    })
  }
});

////////////////////////////////////////////////////////////////