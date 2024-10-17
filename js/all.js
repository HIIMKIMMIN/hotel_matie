$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('header').addClass('fixed-header');        }
    else{
       $('header').removeClass('fixed-header');
    }
});  


$(document).ready(function() {
    let menuOpen = false; // 메뉴 상태 변수

    $('.menu').click(function() {
        menuOpen = !menuOpen; // 메뉴 상태 전환

        if (menuOpen) {
            $('header').addClass('clickMenu'); // 클래스 추가
            $('.click_menu_util').addClass('on');
        } else {
            $('header').removeClass('clickMenu'); // 클래스 제거
            $('.click_menu_util').removeClass('on');
        }
    });

    $(window).scroll(function() {
        if (menuOpen) {
            menuOpen = false; // 스크롤 시 메뉴 상태 초기화
            $('header').removeClass('clickMenu'); // 클래스 제거
            $('.click_menu_util').removeClass('on');
        }
    });
});