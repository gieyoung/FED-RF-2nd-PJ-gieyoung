// 네니아웨이 함수 - way.js

// 제이쿼리 + 제이쿼리UI
// import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function wayFn() {
  var history = gsap.timeline({
    scrollTrigger:{
      trigger:'.sec3',
      // 트리거 적용 대상 .sec3
      scrub:3,
      // 부드럽게
      start:'top top',
      // 시작지점: .sec3의 top과 브라우저의 top이 만날때
      end:'bottom -150%',
      // 끝나는 지점: .sec3의 bottom과 브라우저의 -300%가 만날때(브라우저의 보이지 않는 위쪽)
      pin:true,
      // 고정
      // markers:true,
 
   
    }
  });

  // 오른쪽 텍스트 영역
  history.to('.sec3 .right-wrap', {
    yPercent: -70,
    // 세로축으로 -70px 이동
    ease: "none",
  })

  var history2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.sec3',
      scrub:1,
      start:'top top',
      end:'bottom -150%',
 
    }
  });

  // 왼쪽 이미지
  history2.to('.sec3 .left .bak', {
    backgroundPosition: '50% 10%'
    // 왼쪽 사진 배경 움직임
  })

}
