$(function(){
    const tabMenu = $('.tab_menu a'); // a 태그를 선택
    const memberTab = $('.membership_tab li'); // li 태그를 선택

    tabMenu.on('click', function(event){   
       event.preventDefault(); // a 태그 기본 동작(페이지 이동)을 막음
       
       const index = $(this).index(); // 클릭한 tab_menu의 인덱스를 가져옴
       
       // 클릭된 탭의 인덱스와 다른 memberTab에만 removeClass('active')를 적용
       memberTab.each(function(i){
            if(i !== index){  // 클릭된 탭과 인덱스가 다른 요소만 active 제거
                $(this).removeClass('active');
            }
       });

       // 클릭된 탭에 해당하는 li만 active 클래스 추가
       memberTab.eq(index).addClass('active');

       // 모든 탭에서 on 클래스를 제거하고, 현재 클릭된 탭에만 on 클래스를 추가
       tabMenu.removeClass('on');
       $(this).addClass('on');
    });
});
