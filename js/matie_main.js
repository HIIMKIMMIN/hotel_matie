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