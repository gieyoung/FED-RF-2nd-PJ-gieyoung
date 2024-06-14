// 공통 기능함수 - common.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 나의 함수 불러오기
import mFn from "../func/my_function.js";

console.log(mFn);

///////////헤더 1단메뉴 마우스 오버시 2단메뉴 내려오기/////////////
export default function commonFn(){
  
  $('.gnb-depth1').hover(function() {
    console.log("나야나!",this);
    $(this).find('.gnb-depth2').addClass('on');
  
  },
  function() {
    console.log("나야나2!");
    $(this).find('.gnb-depth2').removeClass('on');
  
  });

}

////////////////////////////////////////////////////////////////