// 공통 기능함수 - common.js

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 나의 함수 불러오기
import mFn from "../func/my_function.js";

///////////헤더 1단메뉴 마우스 오버시 2단메뉴 내려오기/////////////

$('.gnb-depth1').mouseenter(function(){
  $(this).find('.gnb-depth2').addClass('on');

});

$('.gnb-depth1').mouseleave(function(){
  $(this).find('.gnb-depth2').removeClass('on');

});

////////////////////////////////////////////////////////////////