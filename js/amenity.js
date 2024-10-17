$(document).ready(function() {
    // 트리거 클릭 시 드롭다운 열기/닫기
    $('.hotel_select_trigger').on('click', function() {
        $('.hotel_name').toggle(); // 옵션 목록 보이기/숨기기
        $('.hotel_select').toggleClass('active'); // 화살표 회전
    });

    // 옵션 선택 시 트리거에 선택된 값 표시 및 옵션창 닫기
    $('.hotel_list').on('click', function() {
        var selectedValue = $(this).data('value');
        $('.hotel_select_trigger').text(selectedValue); // 선택된 텍스트로 변경
        $('.hotel_name').hide(); // 옵션창 숨기기
        $('.hotel_select').removeClass('active'); // 화살표 초기화
    });

    // 옵션창 외부 클릭 시 닫기
    $(document).click(function(e) {
        if (!$(e.target).closest('.hotel_select').length) {
            $('.hotel_name').hide();
            $('.hotel_select').removeClass('active');
        }
    });
});
