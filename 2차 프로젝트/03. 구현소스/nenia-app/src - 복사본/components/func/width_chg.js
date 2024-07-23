// 스크롤됨에 따라 가로크기 바뀌는 함수 - width_chg.js

// 스토어리스트 CSS 불러오기
// import "../../css/width_chg.scss";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function widthFn() {
  $(function () {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".width-chg",
        scrub: 1,
        start: "top 100%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });
    tl.to(".width-chg", {
      borderRadius: "0",
      width: "100%",
      top: 0,
    });
  });
}
