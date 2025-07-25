const dummyData = {
    "2020": {
    전체: [5, 8, 6, 12, 20, 18, 15, 10, 7, 6, 5, 4],
    자동: [2, 3, 2, 6, 12, 10, 8, 6, 3, 3, 2, 2],
    수동: [3, 5, 4, 6, 8, 8, 7, 4, 4, 3, 3, 2]
    },
    "2021": {
    전체: [8, 12, 15, 18, 25, 30, 28, 20, 15, 12, 10, 9],
    자동: [4, 6, 7, 10, 16, 18, 15, 10, 7, 6, 5, 5],
    수동: [4, 6, 8, 8, 9, 12, 13, 10, 8, 6, 5, 4]
    },
    "2022": {
    전체: [20, 18, 10, 8, 5, 4, 3, 4, 6, 10, 15, 18],
    자동: [10, 8, 5, 4, 2, 2, 1, 2, 3, 6, 9, 10],
    수동: [10, 10, 5, 4, 3, 2, 2, 2, 3, 4, 6, 8]
    },
    "2023": {
    전체: [10, 12, 20, 25, 30, 28, 35, 32, 28, 20, 15, 10],
    자동: [5, 6, 10, 12, 14, 15, 18, 16, 14, 10, 8, 6],
    수동: [5, 6, 10, 13, 16, 13, 17, 16, 14, 10, 7, 4]
    },
    "2024": {
    전체: [40, 42, 35, 30, 25, 20, 18, 15, 12, 10, 8, 6],
    자동: [30, 30, 25, 20, 16, 12, 10, 8, 6, 5, 4, 3],
    수동: [10, 12, 10, 10, 9, 8, 8, 7, 6, 5, 4, 3]
    },
    "2025": {
    전체: [5, 6, 8, 12, 18, 25, 30, 28, 20, 15, 10, 7],
    자동: [3, 3, 4, 6, 10, 15, 18, 16, 10, 8, 6, 4],
    수동: [2, 3, 4, 6, 8, 10, 12, 12, 10, 7, 4, 3]
    },
    "2026": {
    전체: [15, 20, 25, 28, 30, 35, 40, 42, 38, 30, 25, 20],
    자동: [7, 10, 13, 14, 15, 17, 18, 19, 18, 15, 13, 10],
    수동: [8, 10, 12, 14, 15, 18, 22, 23, 20, 15, 12, 10]
    },
    "2027": {
    전체: [10, 8, 6, 5, 5, 4, 4, 4, 5, 6, 8, 10],
    자동: [6, 4, 2, 2, 2, 1, 1, 1, 2, 3, 4, 5],
    수동: [4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 5]
    },
    "2028": {
    전체: [8, 12, 20, 30, 35, 40, 42, 40, 35, 28, 20, 10],
    자동: [3, 4, 8, 12, 15, 18, 20, 18, 16, 12, 8, 5],
    수동: [5, 8, 12, 18, 20, 22, 22, 22, 19, 16, 12, 5]
    },
    "2029": {
    전체: [30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8],
    자동: [20, 18, 16, 14, 12, 10, 8, 6, 5, 4, 3, 2],
    수동: [10, 10, 10, 10, 10, 10, 10, 10, 9, 8, 7, 6]
    },
    'outrange': {
    전체: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    자동: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    수동: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
};

// 연도 선택 시 이벤트 연결
$(document).ready(function () { // HTML 문서의 모든 요소가 다 표시된 뒤에 안의 코드를 실행 
  $('#yearpicker').on('changeDate', function (e) { // datepicker에서 연도가 바뀌었을 때 아래 구문 호출 (e : 선택한 날짜의 대한 정보를 담고 있음)
    const selectedYear = e.format(0, "yyyy");
    const data = dummyData[selectedYear];

    if(!window.chartReady) {
        console.warn("⚠️ 차트가 아직 준비되지 않았습니다.");
        return;
    }

    if(selectedYear <= 2019 || selectedYear >= 2030) {
      alert(` ${selectedYear}년은 데이터가 없습니다. 2020~2029년 사이로 선택해주세요. `);
      const data = dummyData['outrange'];
        window.chart.load({
        columns: [
          ['전체', ...data.전체],
          ['자동', ...data.자동],
          ['수동', ...data.수동]
        ]
      });
    }

    if (data && window.chart) {
      console.log(`✅ 선택한 연도: ${selectedYear}`);
      window.chart.load({
        columns: [
          ['전체', ...data.전체],
          ['자동', ...data.자동],
          ['수동', ...data.수동]
        ]
      });
    } else {
      console.warn(`⚠️ ${selectedYear}년도에 해당하는 데이터가 없습니다.`);
    }
  });
});