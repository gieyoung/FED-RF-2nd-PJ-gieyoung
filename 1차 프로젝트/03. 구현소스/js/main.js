// 헤더 마우스 오버시 2단메뉴 내려오기
const headerWrap = document.querySelector(".nav_wrap");
const gnbList = document.querySelectorAll(".gnb-depth1");

gnbList.forEach((ele)=>{
  ele.addEventListener('mouseenter',()=>{
    headerWrap.classList.add("on");
  });
});

headerWrap.addEventListener('mouseleave',()=>{  
  headerWrap.classList.remove("on");
});