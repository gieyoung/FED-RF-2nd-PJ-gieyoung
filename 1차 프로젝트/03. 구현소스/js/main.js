$(document).ready(function (){


  //硫붿씤�대�吏��щ씪�대뱶
  $('.main_slider').bxSlider({
      auto: true,
      speed: 3000,
      pause: 10000,
      mode: 'fade',
      autoControls: false,
      arrows: false,
      pager: false,
      controls: false,
      responsive: false,

  });

 //�앹뾽�щ씪�대뱶
  $('.bxslider').bxSlider({
      auto: true,
      speed: 1000,
      pause: 5000,
      mode: 'horizontal',
      autoControls: false,
      arrows: true,
      pager: true,
      controls: false,
      responsive: false,

  });




}); //��