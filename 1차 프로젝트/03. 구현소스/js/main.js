// 헤더 마우스 오버시 2단메뉴 내려오기
// const headerWrap = document.querySelector(".nav_wrap");
// const gnbList = document.querySelectorAll(".gnb-depth1");

// gnbList.forEach((ele)=>{
//   ele.addEventListener('mouseenter',()=>{
//     headerWrap.classList.add("on");
//   });
// });

// headerWrap.addEventListener('mouseleave',()=>{
//   headerWrap.classList.remove("on");
// });

//배너 슬라이더
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".swiper-container", {
  // Autoplay 활성화 및 옵션 설정
  loop: true,
  autoplay: {
    delay: 10000, // 슬라이드 전환 시간 (밀리초)
    disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

//슬라이드 정지/재생 버튼
var play = document.querySelector(".swiper-button-play");
var pause = document.querySelector(".swiper-button-pause");

play.onclick = function () {
  swiper.autoplay.start();
};
pause.onclick = function () {
  swiper.autoplay.stop();
};

//햄버거버튼
document.querySelector(".sitemap").onclick = function(){
  document.querySelector(".hambtn").classList.toggle("on");
}


// 다국어
  document.querySelector(".btn_lang").onclick = function(){
    document.querySelector(".lang-menu").classList.toggle("on");
  }
  


