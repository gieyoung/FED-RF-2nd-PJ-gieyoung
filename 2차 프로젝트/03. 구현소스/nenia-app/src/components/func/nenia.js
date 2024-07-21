import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "jquery-ui-dist/jquery-ui";

gsap.registerPlugin(ScrollTrigger);

export default function neniaFn() {
  var windowWidth = window.matchMedia("screen and (min-width: 1024px)");

  if (windowWidth.matches) {
    var rowscroll = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2",
        scrub: 1,
        start: "top 0%",
        end: "bottom -200%",
        pin: true,
        toggleActions: 'play none none none',
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
        toggleActions: 'play none none none',
      },
    });
    rowscroll2.to(".sec2 .right", {
      backgroundPosition: "50% 100%",
    });
  }
}
