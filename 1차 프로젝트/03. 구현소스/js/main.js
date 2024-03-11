// $(document).ready(function(){

//   // Swiper 슬라이더//
//   const progressCircle = document.querySelector(".autoplay-progress svg");
//   const progressContent = document.querySelector(".autoplay-progress span");

//   const swiperEl = document.querySelector("swiper-container");
//   swiperEl.addEventListener("autoplaytimeleft", (e) => {
//     const [swiper, time, progress] = e.detail;
//     progressCircle.style.setProperty("--progress", 1 - progress);
//     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//   });




// }); //��

const headerWrap = document.querySelector(".header_wrap");
const gnbList = document.querySelectorAll(".gnb-depth1");

gnbList.forEach((ele)=>{
  ele.addEventListener('mouseenter',()=>{
    headerWrap.classList.add("on");
  });
});

headerWrap.addEventListener('mouseleave',()=>{  
  headerWrap.classList.remove("on");
});