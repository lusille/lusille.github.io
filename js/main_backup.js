$(document).ready(function(){

  //gnb클릭
  $(document).on('click','.btn_menu',function(){
    var $url = $(this).attr('data-url');
    var $btn = $(this).parent('li');

    $btn.addClass('active').siblings('li').removeClass('active');
    //linkToPage($url);
    if($url === 'about.html') {
      $(".wrap").addClass('wrap_bg');
      $(".main_content").addClass('roll_up shadow_none');
      $(".main_content").removeClass('roll_down');
    }else {
      $(".wrap").removeClass('wrap_bg');
      $(".main_content").removeClass('roll_up shadow_none');
      $(".main_content").addClass('roll_down');
      setTimeout(workSlider, 50);
    }
  });	

  //작업물 클릭
  $(document).on('click','.btn_work_detail',function(){
    var $url = 'work/' + $(this).attr('data-url');
    $('.header_wrap').addClass('fadeout');
    $('.main_header, .main_content').delay(100).addClass('wide');
    $('.btn_work_detail, .work_info').addClass('fadeout');
    setTimeout(function(){
      location.href = $url;
    }, 1000);
  });


  setTimeout(workSlider, 50);

});//jqb

function workSlider() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 50,
    mousewheel: false,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        if(index < 10){
          index = '0' + (index + 1);
        }
        else{
          (index + 1)
        }
        return '<span class="' + className + '">' + index + '</span>';
      }
    },
});
}


function linkToPage(pageUrl){
  $.ajax({ 
    type: 'get' 
    , url: pageUrl
    , dataType : 'html' 
    , success: function(data) {
      $("#mainContent").html(data); 
    } 
  });
}