// Datepicker 작동시키기
$(document).ready(function() {
$('#yearpicker').datepicker({
format: 'yyyy',  // 날짜 형식: 2025 (yyyy-mm-dd)
minViewMode: 2,        // 연도 선택 모드 (0=일, 1=월, 2=연도)
autoclose: true,       // 날짜 선택 시 자동 닫힘
todayHighlight: true   // 오늘 날짜 강조
});

// 더미 데이터
const dummyData = {
"2022": [10, 20, 30],
"2023": [15, 25, 35],
"2024": [20, 30, 40],
"2025": [25, 35, 45]
};

// 연도 선택 시 이벤트 처리
$('#yearpicker').on('changeDate', function(e) {
// console.log(e);
const selectedYear = e.format(0, "yyyy");
const data = dummyData[selectedYear];

if (data) {
    console.log(`✅ 선택한 연도: ${selectedYear}`);
    console.log(`📊 해당 연도의 데이터:`, data);
} else {
    console.log(`⚠️ ${selectedYear}년도에 해당하는 데이터가 없습니다.`);
}
});
});