// 스토어리스트 함수 - store_list.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap 플러그인 불러오기
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function storeFn() {
  $(function () {
    {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".store-list",
          scrub: 1,
          // 부드러운 스크롤
          start: "top 0%",
          // 시작점: 대상의 top과 브라우저의 0%가 만나는 지점
          // endTrigger: ".footer_empty",
          end: "bottom -50%",
          // 끝나는 지점: 대상의 bottom과 브라우저의 -400%r가 만나는 지점
          pin: true,
          // 스크롤시 고정
         
        },
      });

      // 오른쪽 텍스트 영역
      tl.to(".store-list .right ul", {
        yPercent: -100,
        ease: "none",
      });

      // 왼쪽 list2(떡) 이미지 등장
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".store-list .right .list2",
          scrub: 1,
          start: "top 70%",
          end: "top 70%",
          // markers: true,
          
        },
      });
      tl.to(".store-list .left .list2", {
        top: "0%",
      });

      // 왼쪽 list3(만두) 이미지 등장
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".store-list .right .list2",
          scrub: 1,
          start: "top 40%",
          end: "top 40%",
          // markers: true,
        },
      });
      tl.to(".store-list .left .list3", {
        top: "0%",
      });

      // 왼쪽 list4(아이스크림) 이미지 등장
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".store-list .right .list3",
          scrub: 1,
          start: "top 60%",
          end: "top 60%",
          // markers: true,
        },
      });
      tl.to(".store-list .left .list4", {
        top: "0%",
      });

    }
  });
}
