$(document).ready(function () {
    // 모달 열기
    $('#filter_btn').click(function () {
        $('#modal').fadeIn(); // 모달을 띄움
    });

    // 모달 닫기 (x 버튼 클릭 시)
    $('#close_btn').click(function () {
        $('#modal').fadeOut(); // 모달을 닫음
    });
    $('#btn_close').click(function () {
        $('#modal').fadeOut(); // 모달을 닫음
    });

    // 모달 외부 클릭 시 모달 닫기
    $(window).click(function (event) {
        if (event.target.id === 'modal') {
            $('#modal').fadeOut();
        }
    });

    
    // 버튼 클릭 시 색상 변경
    $('.place-btn').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }
        else{
             $(this).addClass('active'); // 클릭한 버튼에 색상 적용
        }
        // $('.place-btn').removeClass('active'); // 다른 버튼의 색상 초기화
       
    });
    let lastChecked = null;



    // 라디오 버튼 클릭 시 처리
    $('.array_radio').click(function() {
        $('.array_radio').prop('checked', false)
        $(this).prop('checked', true)
        if (lastChecked && lastChecked === this) {
            // 같은 라디오 버튼을 클릭했을 때 선택 해제
            $(this).prop('checked', false);
            lastChecked = null;
        } else {
            // 라디오 버튼 선택 처리
            lastChecked = this;
        }
    });
});