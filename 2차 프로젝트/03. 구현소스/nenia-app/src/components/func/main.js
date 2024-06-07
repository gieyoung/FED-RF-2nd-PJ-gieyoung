// 메인영역 함수 - main.js


// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';






// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);


var windowWidth = window.matchMedia("screen and (max-width:900px)");



$(function(){
  if (windowWidth.matches){
    var tl = gsap.timeline({
      scrollTrigger: {                     
      trigger: '.main2',               
      scrub:1,                          
      start:'top 76%',             
      end:'top 40%',
      toggleActions: 'play none none none',
    }
    });
  tl.to(".main2", {
      borderRadius:'0 0 20px 20px', 
      width: '100%',
      top: 0,
      });
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger:'.main_3',
          scrub:1,
          start:'top 100%',
          endTrigger:'bottom',
          end:'bottom -200%',
          toggleActions: 'play none none none',
        }
      });
      tl.to('.main_3', {
        backgroundPosition:'50% 100%'
      })
      
  }else{ //PC
    var tl = gsap.timeline({
        scrollTrigger: {                     
        trigger: '.main2',               
        scrub:1,                          
        start:'top 76%',             
        end:'top 40%',
        toggleActions: 'play none none none',
      }
      });
    tl.to(".main2", {
        borderRadius:'0 0 20px 20px', 
        width: '100%',
        top: 0,
        });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger:'.main_3',
        scrub:1,
        start:'top 100%',
        endTrigger:'bottom',
        end:'bottom -200%',
        toggleActions: 'play none none none',
      }
    });
    tl.to('.main_3', {
      backgroundPosition:'50% 80%'
    })
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_4',
        scrub:1,
        start:'top top',
        end: 'bottom -150%',
        pin:true,
        toggleActions: 'play none none none',
      }
    });
    tl.to('.main_4 ul', {
      xPercent: -100,
      ease: "none",
    })
    tl.to('.mian_4 li .img_box', {
      borderRadius:'50px'
    })

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5',
        scrub:1,
        start:'top top',
        endTrigger:'.footer_empty',
        end:'+=4000',
        pin:true,
        toggleActions: 'play none none none',
      }
    });
    tl.to('.main_5 .right ul', {
      yPercent: -85,
      ease: "none",
    })
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top 30%',
        endTrigger:'bottom',
        end:'+=1500',
      }
    });
    tl.to(".main_5 .right .main5_1",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_1",{
      opacity:0.2,
    });
    tl.to("#wrap_footer",{
        zIndex:0
    })


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top 0%',
        endTrigger:'top',
        end:'+=1500',
      }
    });
    tl.to(".main_5 .right .main5_2",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_2",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -30%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_2",{
      top:'0%',
    });


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -60%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_3",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_3",{
      opacity:0.2,
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -100%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_3",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -110%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_4",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_4",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -160%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_4",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -170%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_5",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_5",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -210%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_5",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -220%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_6",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_6",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -260%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_6",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -270%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_7",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_7",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -330%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_7",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -330%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".main_5 .right .main5_8",{
      opacity:1,
    });
    tl.to(".main_5 .right .main5_8",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.main_5 .right',
        scrub:1,
        start:'top -380%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".main_5 .left .main5_8",{
      top:'0%',
    });
  }
});
