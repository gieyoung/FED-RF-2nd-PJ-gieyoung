// 스토어리스트 함수 - store_list.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap 플러그인 불러오기
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);




var windowWidth = window.matchMedia("screen and (max-width:900px)");
$(function () {
  if (windowWidth.matches) {
  } else {
    //PC

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list",
        scrub: 1,
        // 부드러운 스크롤
        start: "top top",
        endTrigger: ".footer_empty",
        end: "+=4000",
        pin: true,
        toggleActions: "play none none none",
      },
    });
    tl.to(".store-list .right ul", {
      yPercent: -85,
      ease: "none",
    });

    // 오른쪽 list1 글자 투명도
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top 30%",
        endTrigger: "bottom",
        end: "+=1300",
      },
    });
    tl.to(".store-list .right .list1", {
      opacity: 1,
    });
    tl.to(".store-list .right .list1", {
      opacity: 0.2,
    });
    tl.to("#wrap_footer", {
      zIndex: 0,
    });

    // 오른쪽 list2 글자 투명도
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top 0%",
        endTrigger: "bottom",
        end: "+=1300",
      },
    });

    tl.to(".store-list .right .list2", {
      opacity: 1,
    });
    tl.to(".store-list .right .list2", {
      opacity: 0.2,
    });

    // 왼쪽 list2 이미지 등장
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -50%",
        endTrigger: "bottom",
        end: "+=50",
      },
    });
    tl.to(".store-list .left .list2", {
      top: "0%",
    });

    // 오른쪽 list3 글자 투명도
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -80%",
        endTrigger: "bottom",
        end: "+=1300",
      },
    });
    tl.to(".store-list .right .list3", {
      opacity: 1,
    });
    tl.to(".store-list .right .list3", {
      opacity: 0.2,
    });

    // 왼쪽 list3 이미지 등장
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -100%",
        endTrigger: "bottom",
        end: "+=50",
      },
    });
    tl.to(".store-list .left .list3", {
      top: "0%",
    });

    // 오른쪽 list4 글자 투명도
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -110%",
        endTrigger: "bottom",
        end: "+=1300",
      },
    });
    tl.to(".store-list .right .list4", {
      opacity: 1,
    });
    tl.to(".store-list .right .list4", {
      opacity: 0.2,
    });

    // 왼쪽 list4 이미지 등장
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -150%",
        endTrigger: "bottom",
        end: "+=50",
      },
    });
    tl.to(".store-list .left .list4", {
      top: "0%",
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -170%",
        endTrigger: "bottom",
        end: "+=1300",
      },
    });
    tl.to(".store-list .right .list5", {
      opacity: 1,
    });
    tl.to(".store-list .right .list5", {
      opacity: 0.2,
    });

    // 왼쪽 list5 이미지 등장
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".store-list .right",
        scrub: 1,
        start: "top -200%",
        endTrigger: "bottom",
        end: "+=50",
      },
    });
    tl.to(".store-list .left .list5", {
      top: "0%",
    });
  }
});
