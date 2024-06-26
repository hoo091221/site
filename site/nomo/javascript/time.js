function setClock(){
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    var date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
	var today = new Date();
var weekday = new Array(7);
weekday[0] = "일요일";
weekday[1] = "월요일";
weekday[2] = "화요일";
weekday[3] = "수요일";
weekday[4] = "목요일";
weekday[5] = "금요일";
weekday[6] = "토요일";


var day = weekday[today.getDay()];

	if (day == "월요일") {
		document.getElementById('weekend').innerHTML = '아직 하루밖에 안 됐는데? 화이팅!';
	} else if (day == "화요일") {
		document.getElementById('weekend').innerHTML = '이번 주 시작한지 2일이나 됐어! 화이팅!';
	} else if (day == "수요일") {
		document.getElementById('weekend').innerHTML = '벌써 일주일의 중간에 왔어! 화이팅!';
	} else if (day == "목요일") {
		document.getElementById('weekend').innerHTML = '이제 쪼끔만 더 버티면 주말이야!';
	} else if (day == "금요일") {
		document.getElementById('weekend').innerHTML = '이번 주도 잘 버텼어! 드디어 쉰다!';
		document.getElementById('weekendbackground').style.backgroundImage = "url('img/partyscreen.gif')";
	} else if (day == "토요일") {
		document.getElementById('weekend').innerHTML = '와, 드디어 주말이다!!';
		document.getElementById('weekendbackground').style.backgroundImage = "url('img/partyscreen.gif')";
	} else if (day == "일요일") {
		document.getElementById('weekend').innerHTML = '안돼.. 내일이 월요일이야...';
		document.getElementById('weekendbackground').style.backgroundImage = "url('img/partyscreen.gif')";
	}
	
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,1000); //1초마다 setClock 함수 실행
}