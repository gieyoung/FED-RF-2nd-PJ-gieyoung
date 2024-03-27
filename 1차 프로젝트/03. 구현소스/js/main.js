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

/****************배너 슬라이더(swiper)****************/
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

/****************슬라이드 정지/재생 버튼****************/
var play = document.querySelector(".swiper-button-play");
var pause = document.querySelector(".swiper-button-pause");



play.onclick = function () {
  swiper.autoplay.start();
};
pause.onclick = function () {
  swiper.autoplay.stop();
};

/****************햄버거 버튼****************/
document.querySelector(".sitemap").onclick = function () {
  document.querySelector(".hambtn").classList.toggle("on");
};

/****************다국어****************/
document.querySelector(".btn_lang").onclick = function () {
  document.querySelector(".lang-menu").classList.toggle("on");
};

/****************탭****************/

// 대상선정: 탭버튼
const tabBtn = document.querySelectorAll(".tab li a");
// 대상선정: 탭리스트
const tabList = document.querySelectorAll(".tab-list ul");
//대상확인
// console.log(tabBtn,tabList);

//탭버튼 on넣고 빼기
tabBtn.forEach((ele, idx) => {
  ele.onclick = () => {
    for (let x of tabBtn) {
      x.classList.remove("on");
    }/////////for of//////////
    ele.classList.add("on");

//현재 선택된 탭버튼과 순서가 일치하는 탭리스트에 on넣고 빼기
    for (let x of tabList) {
      x.classList.remove("on");
    }/////////for of//////////
    tabList[idx].classList.add("on");
  };//////click//////////
});//////////forEach////////////



/********************탑버튼********************/

const topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => {
  window.scrollTo({top:0, behavior:'smooth'});
};///////click///////////

