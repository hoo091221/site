// CSV 파일 경로
const csvFilePath = 'https://hoo091221.github.io/lunch/csv/school.csv';

// 로드된 데이터를 저장할 배열
var rows = [];

// CSV 파일을 스트림으로 읽어와서 데이터를 파싱함

var rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var rows = rawFile.responseText;
            }
        }
    }.pipe(csv())
    .on('data', (row) => {
        // 각 행의 데이터를 rows 배열에 추가
        rows.push(row);
    })
    .on('end', () => {
        // 파일이 모두 읽혔을 때 실행될 코드
        // 변수값과 일치하는 행을 찾기
        var matchingRow = rows.find(row => row['학교명'] == args); // 학교명 열에서 몇 번째 행인지 찾기
        if (matchingRow) {
            // 변수값과 일치하는 행을 찾았을 때 실행될 코드
            var sdshcode = matchingRow['시도교육청코드'];
            var sccode = matchingRow['행정표준코드'];

            // 오늘 날짜 구하기

            var dateInfo = new Date();
            var year = dateInfo.getFullYear();
            var month = dateInfo.getMonth() + 1;
            var date = dateInfo.getDate();

            var todaydate = // 날짜로 쓰이는 부분
                year +
                '' +
                ('00' + month.toString()).slice(-2) +
                '' +
                ('00' + date.toString()).slice(-2);

            // Request 요청할 url 만들기

            const url =
                'https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=' +
                sdshcode + // 시도교육청코드
                '&Type=JSON' + // JSON 형태로 출력
                '&SD_SCHUL_CODE=' +
                sccode + // 학교 코드
                '&MLSV_YMD=' +
                todaydate +
                '&key=0329ec2eb15f4888b665ab2b92887d4a'; // 키값

            // Request 모델 불러오고 API 사용하기

            request({
                url: url,
                method: 'GET'
            }, function(error, response, body) {

                var menu = JSON.parse(body); // API 요청으로 받은 텍스트
                if (body.slice(0, -31).slice(19) == 'INFO-200') { // 공휴일과 주말 같은 예외 처리

                    // 임베드

                    console.log('휴일');
                } else {

                    // 임베드
                    console.log('결과출력');
                }

            });


        } else {
            // 변수값과 일치하는 행을 찾지 못했을 때 실행될 코드
            // 임베드
            console.log('학교없음');
        }
    });