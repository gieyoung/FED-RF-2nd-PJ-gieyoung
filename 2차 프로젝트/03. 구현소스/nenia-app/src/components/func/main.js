// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// 가로 사이즈 변하는 js불러오기
import "../func/width_chg.js";

// $(".btn>a").on("click", () => {
//   $(".close-btn").show("on");
//   $(".vid-popup").addClass("on");
// });
// $(".close-btn").on("click", () => {
//   $(".close-btn").hide("on");
//   $(".vid-popup").removeClass("on");
// });
$(".btn>a").on("click", () => {
  $(".close-btn").show("on");
  $(".vid-popup").addClass("on");
});
$(".close-btn").on("click", () => {
  $(".close-btn").show("on2");
  $(".vid-popup").removeClass("on");
});









// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);


var windowWidth = window.matchMedia("screen and (max-width:900px)");


// 메인3 이미지 움직이는 효과
// $(function(){
//   if (windowWidth.matches){
//     var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger:'.main3',
//         scrub:1,
//         start:'top 100%',
//         endTrigger:'bottom',
//         end:'bottom -200%',
//         toggleActions: 'play none none none',
//       }
//     });
//     tl.to('.main3', {
//       backgroundPosition:'50% 100%'
//     })
     
      
//   }else{ //PC
//     var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger:'.main3',
//         scrub:1,
//         start:'top 100%',
//         endTrigger:'bottom',
//         end:'bottom -200%',
//         toggleActions: 'play none none none',
//       }
//     });
//     tl.to('.main3', {
//       backgroundPosition:'50% 80%'
//     })
    
    
//   }
// });
