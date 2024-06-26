// 연혁 함수 - history.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

export default function historyFn() {
  var tl = gsap.timeline({
    top:'0',
    scrollTrigger:{
      trigger:'.s11_5',
      scrub:1,
      start:'top top',
      end:'bottom -400%',
      pin:true,
      toggleActions: 'play none none none',
    }
  });
  tl.to('.s11_5 .right_wrap', {
    yPercent: -90,
    ease: "none",
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.s11_5',
      scrub:1,
      start:'top top',
      end:'bottom -400%',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.s11_5 .left .bak', {
    backgroundPosition: "50% 100%",
  })


  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(1)',
      scrub:1,
      start:'top 70%',
      end:'+1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(1)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(1)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(2)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(2)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(2)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(3)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(3)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(3)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(4)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(4)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(4)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(5)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(5)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(5)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(6)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(6)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(6)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(7)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(7)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(7)', {
    opacity:0.2,
  })

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(8)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(8)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(8)', {
    opacity:0.2,
  })
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sub_history:nth-child(9)',
      scrub:1,
      start:'top 40%',
      end:'+=1000',
      toggleActions: 'play none none none',
    }
  });
  tl.to('.sub_history:nth-child(9)', {
    opacity:1,
  })
  tl.to('.sub_history:nth-child(9)', {
    opacity:0.2,

  });
}
