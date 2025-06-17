console.log("비동기테스트1");

function getJSON() {
    // data2.json에 GET 요청을 보낸다.
    $.ajax({
        method: "GET",
        url: "data2.json",
        data: {}, // 요청을 보내는 데이터
    })
    // 서버로부터 응답받은 데이터 처리 (data 매개변수는 서버에서 보내주는 응답을 자동으로 넣어준다.)
    .done(function(data) {
        // console.log(`done이 실행되었습니다!! 메시지 : ${JSON.stringify(data)}`);
        
        $(".table_body").empty();

        // 반복하면서 행 추가
        let index = 1;
        data.forEach(element => {
            console.log(element.address);
            const row = `
            <tr>
                <td>${index}</td>
                <td>${element.name}</td>
                <td>${element.phone}</td>
                <td>${element.address}</td>
                <td>${element.status}</td>
                <td>${element.memo}</td>
                <td>${element.date}</td>
            </tr>
            `;
            $(".table_body").append(row);
            index++;
        });

        // 기존 테이블 초기화
        $(".table_body").toggle();
    })

    .fail(function() {
        console.log(`데이터 불러오기 실패했습니다.`);
    });
}

console.log("비동기테스트2");