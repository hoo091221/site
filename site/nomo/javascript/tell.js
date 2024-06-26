// 명언 추출

function tell() {
	const tell = [
		'미래를 결정짓고 싶다면 과거를 공부하라.<br><small>- 공자 -</small>',
		'신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.<br><small>- 테레사 수녀 -</small>',
		'수정을 용납하지 않는 계획은 나쁜 계획이다.<br><small>- 퍼블릴리어스 사이러스 -</small>',
		'희망만을 먹고 사는 자는 굶어 죽을 것이다.<br><small>- 벤자민 프랭클린 -</small>',
		'어떤 일을 하기에 앞서 스스로 그 일에 대한 기대를 가져야 한다.<br><small>- 마이클 조던 -</small>',
		'내가 목표에 달성한 비밀을 말해줄게. 나의 강점은 바로 끈기야.<br><small>- 루이 파스퇴르 -</small>',
		'나에게 창의성은 안먹고는 살 수 없는 약과 같다.<br><small>- 세실 B. 드밀 -</small>',
		'기회를 찾아야 기회를 만든다.<br><small>패티 헨슨</small>',
	];
	function randomValueFromArray(array) {
		const random = Math.floor(Math.random() * array.length);
		return array[random];
	}
	let nice = randomValueFromArray(tell);

	const m = document.getElementById('tell');
	m.innerHTML = '오늘의 명언<br><small>' + nice + '</small>';
}
tell();