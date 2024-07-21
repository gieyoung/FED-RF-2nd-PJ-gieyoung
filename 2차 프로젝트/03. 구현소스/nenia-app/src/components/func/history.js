import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

gsap.registerPlugin(ScrollTrigger);

export default function historyFn() {
  var windowWidth = window.matchMedia("screen and (min-width: 768px)");

  function handleResize() {
    if (windowWidth.matches) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.s11_5',
          scrub: 1,
          start: 'top top',
          end: 'bottom -400%',
          pin: true,
          toggleActions: 'play none none none',
        }
      });
      tl.to('.s11_5 .right_wrap', {
        yPercent: -90,
        ease: "none",
      });

      for (let i = 1; i <= 9; i++) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.sub_history:nth-child(${i})`,
            scrub: 1,
            start: 'top 40%',
            end: '+=1000',
            toggleActions: 'play none none none',
          }
        });
        tl.to(`.sub_history:nth-child(${i})`, {
          opacity: 1,
        });
        tl.to(`.sub_history:nth-child(${i})`, {
          opacity: 0.2,
        });
      }
    }
  }

  // 페이지 로드 시 한 번 실행
  handleResize();

  // 창 크기 변경 시 마다 실행
  window.addEventListener('resize', function() {
    handleResize();
  });
}
