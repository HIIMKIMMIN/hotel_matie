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
// 탭 클릭 시 처리
$('.amenity_tab ul li a').click(function(e) {
    e.preventDefault(); // 링크 기본 동작 방지

    // 모든 탭에서 'on' 클래스 제거 후 클릭된 탭에 'on' 클래스 추가
    $('.amenity_tab ul li a').removeClass('on');
    $(this).addClass('on');

    // 클릭된 탭의 텍스트 가져오기
    var category = $(this).text().trim();

    // 모든 콘텐츠를 숨김
    $('.all_contents ul li').hide();

    // '전체' 탭을 눌렀을 때 모든 항목을 표시
    if (category === '전체') {
        $('.all_contents ul li').show();
    }
    // '다이닝' 탭을 눌렀을 때 .dining 클래스 항목만 표시
    else if (category === '다이닝') {
        $('.all_contents ul li.dining').show();
    }
    // '편의시설' 탭을 눌렀을 때 .amenity 클래스 항목만 표시
    else if (category === '편의시설') {
        $('.all_contents ul li.amenity').show();
    }
    // '액티비티' 탭을 눌렀을 때는 아무 것도 표시하지 않음
    else if (category === '액티비티') {
        // 아무것도 하지 않음 (모두 숨겨진 상태 유지)
    }
});
