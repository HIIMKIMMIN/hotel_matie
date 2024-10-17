$(document).ready(function () {
    const items = $('.room_list li'); // li 항목들 가져오기
    const showItems = 6; // 처음에 보여줄 아이템 개수

    // 처음 6개 항목만 보이도록 설정
    items.slice(showItems).hide();

    // '더보기' 버튼 클릭 시 나머지 항목들 보이게 하기
    $('#more_btn').click(function () {
        items.show(); // 모든 항목을 보이도록 설정
        $('.more_btn_area').hide(); // 더보기 버튼은 숨김
    });
});



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
});


$(document).ready(function () {
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

    // 업다운 버튼 클릭 시 값 조정
    $('.increment').click(function () {
        let value = parseInt($('#person_count').val());
        if (value < 10) {
            $('#person_count').val(value + 1);
        }
    });

    $('.decrement').click(function () {
        let value = parseInt($('#person_count').val());
        if (value > 0) {
            $('#person_count').val(value - 1);
        }
    });

    // 슬라이더 구간 설정
    $('#room_size').on('input', function () {
        let value = $(this).val();
        // console.log('현재 선택한 구간: ' + value); // 구간 출력
    });
});





$(document).ready(function () {
    const slider = $('#room_size');

    // 슬라이더의 값에 따라 배경을 업데이트
    slider.on('input', function () {
        const value = $(this).val();
        const max = $(this).attr('max');
        const percentage = (value - 1) / (max - 1) * 100; // 1부터 시작하는 구간 맞춤

        // 첫 번째 값(1일 때)은 전체 배경이 white
        if (value == 1) {
            $(this).css('background', 'white');
        } else {
            // 두 번째 값 이상부터는 선택된 부분만 색상 변경
            $(this).css('background', `linear-gradient(to right, #0E374F 0%, #0E374F ${percentage}%, white ${percentage}%, white 100%)`);
        }
    });

    // 초기 상태에서 백그라운드 설정
    slider.trigger('input');
});

$(document).ready(function() {
    // room_list > li > a 클릭 시 모달 생성
    $('.room_list li a').click(function(event) {
        event.preventDefault(); // 기본 링크 동작 방지

        // 클릭한 li 내부의 이미지와 텍스트 내용을 가져오기
        var roomDetails = $(this).find('.text_area').html();
        var roomImage = $(this).find('img').attr('src');

        // 새로운 모달과 오버레이 동적 생성
        // 
        var modalHTML = `
          <div class="dynamic-overlay"></div>
          <div class="modal-room-content">
                    <img src="${roomImage}" alt="Room Image" style="width: 100%; height: auto;">
                    <div>${roomDetails}</div>
         </div> `;

        // cont_modal에 모달과 오버레이 추가
        $('.cont_modal').append(modalHTML);

        // 모달과 오버레이 보여주기
        $('.dynamic-overlay').fadeIn();
        $('.cont_modal').fadeIn();

        // 모달 닫기 버튼과 오버레이 클릭 시 모달 닫기
        $('#close_btn, .dynamic-overlay').click(function() {
            $('.cont_modal').fadeOut(function() {
                $(this).remove(); // 모달 삭제
            });
            $('.dynamic-overlay').fadeOut(function() {
                $(this).remove(); // 오버레이 삭제
            });
        });
    });
});
