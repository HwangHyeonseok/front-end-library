// Datepicker 작동시키기
$(document).ready(function() {
    $('#yearpicker').datepicker({
    format: 'yyyy',  // 날짜 형식: 2025 (yyyy-mm-dd)
    minViewMode: 2,        // 연도 선택 모드 (0=일, 1=월, 2=연도)
    autoclose: true,       // 날짜 선택 시 자동 닫힘
    todayHighlight: true   // 오늘 날짜 강조
    });
}).on('show', function () {
  setTimeout(() => {
    const picker = $('.datepicker:visible'); // 열린 팝업 DOM

    picker.css({
      top: '140px',
      left: '520px'
    });
  }, 10); // 팝업 생성 후 위치 적용
});