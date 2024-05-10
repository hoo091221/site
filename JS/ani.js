document.addEventListener('DOMContentLoaded', () => {
	const splashText = document.querySelector('.splash-text');
	const splashP = document.querySelector('.splash-p');

	setTimeout(() => {
		splashText.style.opacity = '1';
		splashText.style.transform = 'translateY(0)';

		// setTimeout(() => {
		// 	splashP.style.opacity = '1';
		// 	splashP.style.transform = 'translateY(0)';
		// }, 500);
	}, 500);
});

window.addEventListener('scroll', function () {
	const element = document.getElementById('scroll-text'); // id로 해당 요소
	// 요소가 화면 안쪽으로 들어왔을 경우 isVisible로 인식
	const isVisible = element.getBoundingClientRect().top <= window.innerHeight && rect.bottom >= 0;

	if (isVisible) {
		element.style.opacity = '1';
		element.style.transform = 'translateY(0)';
	} else {
		element.style.opacity = '0';
		element.style.transform = 'translateY(1)';
	}
});