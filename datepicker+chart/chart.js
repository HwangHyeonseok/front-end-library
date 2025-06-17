window.chart = c3.generate({ // chart 객체를 외부에서 사용할 수 있도록 window.chart 로 저장
bindto: '#chart', // 그래프를 그리는 위치 : id가 chart인 영역에 해당 차트를 붙여넣는다.
data: {
    columns: [ // 어떤 데이터가 들어갈지 정한다.
        ['전체', 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['자동', 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['수동', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    types: { // 어떤 그래프 형태로 그려줄지 정한다.
        '전체' : 'line',
        '자동' : 'line',
        '수동' : 'line'
    },
    colors: { // 색상 적용
    '전체': '#008ECC',
    '자동': '#FD8505',
    '수동': '#2DB400'
    }
},
axis: { // 축 만들기 
    x: {
        // label: '월별',
        type: 'category',
        categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    },
    y: {
        // label: '매출(단위: 만원)'
    }
},
legend: { show: true }
});

console.log("✅ chart.js에서 차트 생성 완료");
window.chartReady = true;