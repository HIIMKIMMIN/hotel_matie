$(function(){
    var swiper = new Swiper(".main_visual", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 3000,
        slidesPerView: 'auto',
        loop: true,
        autoplay : {
            delay : 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

// jQuery 코드
$(document).ready(function() {
    function updateImages() {
        if ($(window).width() <= 768) {
            // 화면 크기가 768px 이하일 때
            $('.swiper-slide img').eq(0).attr('src', 'img/view (3).png');
            $('.swiper-slide img').eq(1).attr('src', 'img/view (4).png');
            $('.swiper-slide img').eq(2).attr('src', 'img/view (5).png');
        } else {
            // 화면 크기가 768px 이상일 때
            $('.swiper-slide img').eq(0).attr('src', 'img/view (1).png');
            $('.swiper-slide img').eq(1).attr('src', 'img/view (2).png');
            $('.swiper-slide img').eq(2).attr('src', 'img/view.png');
        }
    }

    // 페이지가 로드될 때 이미지 업데이트
    updateImages();

    // 윈도우 리사이즈 시 이미지 업데이트
    $(window).resize(function() {
        updateImages();
    });
});

 
    
    // $(window).scroll(function(){
    //     const scrollTop = $(this).scrollTop();
    //     const contListTop = $('.contents_list').offset().top; // contents_list의 상단 위치
    //     if($(window).scrollTop() >= contListTop){
    //         $('..contents2 .contents_list').css('transform', 'translateY(' + scrollTop + 'px)');
    //     }
    // });
    const cont2Top = $('.contents2').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1600) {
           $('.contents_list').addClass('img-slider');
        }
        else{
           $('.contents_list').removeClass('img-slider');
        }
        
    });   
    

})