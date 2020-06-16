/* 동작 확인용 스크립트 입니다. 동작만 확인하세요~ */

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function addIdNumHypen(x) {
    return x.toString().replace(/(\d{6})(\d{1})/, '$1-$2');
}
function addPhoneNumHypen(x) {
    return x.toString().replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
}

$(document).ready(function(){

    $('#fsLoanAmount').on('keyup', function(){
        $(this).val(addCommas($(this).val().replace(/[^0-9]/g,"")));
    });


    $('#fsIdNum').on('keyup', function(){
        $(this).val(addIdNumHypen($(this).val().replace(/[^0-9]/g,"")));
    })


    $('#fsPhoneNum').on('keyup', function(){
        $(this).val(addPhoneNumHypen($(this).val().replace(/[^0-9]/g,"")));
    })


    //원큐 금융상담 메뉴 인터렉션 확인
    $('.fs_btn_menu').on('click', function(e){
        e.preventDefault();
        if($(this).attr('aria-selected') == 'true') {
           $(this).attr('aria-selected', false);
          
           } else {
             $('.fs_btn_menu').attr('aria-selected', false);
              $(this).attr('aria-selected', true);
           }
      })

    // 개인정보 이용동의/ 서비스 약관 모두동의 버튼
    $('.fs_btn_confirm').on('click',function(){
        if($(this).attr('aria-pressed') === "true") {
            $(this).attr('aria-pressed', false);
        } else {
            $(this).attr('aria-pressed', true);
        }
    });

    //대리인 정보입력 약관동의 버튼
    $('.fs_check_btn').on('click', function(){
        if($(this).attr('aria-selected') === "true"){
            $(this).attr('aria-selected', false);
        } else {
            $(this).attr('aria-selected', true);
        }
    });

    //개인정보 이용동의 약관보기 버튼(팝업)
    $('.fs_condition_link').on('click',function(e){
        e.preventDefault();
        $('.mask').addClass('show_on');
        $('.mask').height($(document).height());
        $('.fs_ly_condition').addClass('show_on');
    });

    //개인정보 이용동의 약관 팝업 닫기
    $('.popup_btn_close').on('click',function(){
        $('.mask').removeClass('show_on');
        $('.mask').height("");
        $('.fs_ly_condition').removeClass('show_on');
    });

    //나의 상담조회 상세 정보보기 
    $('.fs_btn_detail').on('click', function(){
        $(this).attr('aria-expanded', true);
        $('.fs_result_wrap').attr('aria-hidden', false);
    });

    $('.fs_btn_close').on('click', function(){
        $('.fs_btn_detail').attr('aria-expanded', false);
        $('.fs_result_wrap').attr('aria-hidden', true);
    })
});