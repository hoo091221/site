function lunch() {
	var dateInfo = new Date();
	var nowyear = dateInfo.getFullYear();
	var nowmonth = dateInfo.getMonth() + 1;
	var nowdate = dateInfo.getDate();
	var nowtime = dateInfo.getHours();
	var todaydate =
		nowyear +
		'' +
		('00' + nowmonth.toString()).slice(-2) +
		'' +
		('00' + nowdate.toString()).slice(-2);
	if (nowtime > '13') {
		var tomorrow = new Date(dateInfo.setDate(dateInfo.getDate() + 1));
		var nowyear = tomorrow.getFullYear();
		var nowmonth = tomorrow.getMonth() + 1;
		var nowdate = tomorrow.getDate();
		var nowtime = tomorrow.getHours();
		var todaydate =
			nowyear +
			'' +
			('00' + nowmonth.toString()).slice(-2) +
			'' +
			('00' + nowdate.toString()).slice(-2);
		console.log(todaydate);
	}
	const url =
		'https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=' +
		'S10' + // 학교 코드
		'&SD_SCHUL_CODE=' +
		'9111056' + // 시청 코드(맞나? 몰라 지역 코드일꺼야)
		'&MLSV_YMD=' +
		todaydate +
		'&key=0329ec2eb15f4888b665ab2b92887d4a'; // 키값
	var today = new Date();
	var weekday = new Array(7);
	weekday[0] = '일요일';
	weekday[1] = '월요일';
	weekday[2] = '화요일';
	weekday[3] = '수요일';
	weekday[4] = '목요일';
	weekday[5] = '금요일';
	weekday[6] = '토요일';
	var day = weekday[today.getDay()];

	const request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = function () {
		if (nowtime > '13') {
			var menu =
				"<span style='font-size: 3vw;'>내일의 급식 메뉴<br></span>" +
				request.responseText
					.slice(0, -731)
					.slice(649)
					.replace(/\./g, '')
					.replace(/[0-9]/g, '');
		} else {
			var menu =
				"<span style='font-size: 3vw;'>오늘의 급식 메뉴<br></span>" +
				request.responseText
					.slice(0, -731)
					.slice(649)
					.replace(/\./g, '')
					.replace(/[0-9]/g, '');
		}

		const m = document.getElementById('menu');

		m.innerHTML = menu;
		if (menu == "<span style='font-size: 3vw;'>오늘의 급식 메뉴<br></span>") {
			var menu =
				"<span style='font-size: 3vw;'>오늘의 급식 메뉴<br></span><span style='font-size: 2.5vw;'>휴일이네요!<br><br><br><br><br><br></span>";
			m.innerHTML = menu;
		} else if (menu == "<span style='font-size: 3vw;'>내일의 급식 메뉴<br></span>") {
			var menu =
				"<span style='font-size: 3vw;'>내일의 급식 메뉴<br></span><span style='font-size: 2.5vw;'>휴일이네요!<br><br><br><br><br><br></span>";
			m.innerHTML = menu;
		}
	};
	request.send();
}

lunch();