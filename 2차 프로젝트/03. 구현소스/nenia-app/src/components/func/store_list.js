// 메인영역 함수 - main.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 스크롤트리거 플러그인을 불러오기
gsap.registerPlugin(ScrollTrigger);

var windowWidth = window.matchMedia("screen and (max-width:900px)");

$(function(){
  if (windowWidth.matches){
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list',
        scrub:1,
        start:'top top',
        endTrigger:'.footer_empty',
        end:'+=4000',
        pin:true,
        toggleActions: 'play none none none',
      }
    });
    tl.to('.store-list .right ul', {
      yPercent: -85,
      ease: "none",
    })
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top 30%',
        endTrigger:'bottom',
        end:'+=1500',
      }
    });
    tl.to(".store-list .right .main5_1",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_1",{
      opacity:0.2,
    });
  

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top 0%',
        endTrigger:'top',
        end:'+=1500',
      }
    });
    tl.to(".store-list .right .main5_2",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_2",{
      opacity:0.2,
    });


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -30%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_2",{
      top:'0%',
    });


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -60%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_3",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_3",{
      opacity:0.2,
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -100%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_3",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -110%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_4",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_4",{
      opacity:0.2,
    });


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -160%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_4",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -170%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_5",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_5",{
      opacity:0.2,
    });


    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -210%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_5",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -220%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_6",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_6",{
      opacity:0.2,
    });
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -260%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_6",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -270%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_7",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_7",{
      opacity:0.2,
    });



    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -330%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_7",{
      top:'0%',
    });

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -330%',
        endTrigger:'bottom',
        end:'+=1300',
      }
    });
    tl.to(".store-list .right .main5_8",{
      opacity:1,
    });
    tl.to(".store-list .right .main5_8",{
      opacity:0.2,
    });



    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.store-list .right',
        scrub:1,
        start:'top -380%',
        endTrigger:'bottom',
        end:'+=50',
      }
    });
    tl.to(".store-list .left .main5_8",{
      top:'0%',
    });
  }
});



