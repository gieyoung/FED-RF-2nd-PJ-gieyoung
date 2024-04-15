
/****************햄버거 버튼****************/
//대상선정: 햄버거 버튼
const siteMap = document.querySelector(".sitemap");
const hamBtn = document.querySelector(".hambtn");
const popMenu = document.querySelector(".pop-menu");
const black = document.querySelector(".black-back");


// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
siteMap.addEventListener('click', () => {
  hamBtn.classList.toggle('on');
  popMenu.classList.toggle('on');
  black.classList.toggle('on');

});



/****************사이트맵 팝업****************/



/****************다국어****************/
document.querySelector(".btn-lang").onclick = function () {
  document.querySelector(".lang-menu").classList.toggle("on");
};

/********************검색팝업********************/

// 대상선정: 검색버튼
const search = document.querySelector(".search");
// 대상선정: 검색창
const popSearch = document.querySelector("#top-area .pop-search");
// 대상선정: 닫기버튼
const delBtn = document.querySelector("#top-area .pop-search .del-btn");


//검색아이콘 클릭시 검색창 뜨게
search.onclick = () => {
  popSearch.style.display = 'flex';

};////////click///////////

//닫기버튼 클릭시 검색창 닫게
delBtn.onclick = () => {
  popSearch.style.display = 'none';

};////////click///////////








/********************탑버튼********************/

const topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => {
  window.scrollTo({top:0, behavior:'smooth'});
};///////click///////////



/********************동의 버튼********************/
//대상선정: 햄버거 버튼
const agreeBtn = document.querySelector(".btn_detail");
const agreeCon = document.querySelector(".agree_content");


// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
agreeBtn.addEventListener('click', () => {
  agreeCon.classList.toggle('on');
  

});
