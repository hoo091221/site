document.addEventListener('DOMContentLoaded', () => {
    const splashText = document.querySelector('.splash-text');
    const splashP = document.querySelector('.splash-p');
    const splash1 = document.querySelector('.splash-1');
    const splash2 = document.querySelector('.splash-2');
    const splash3 = document.querySelector('.splash-3');
    const splash4 = document.querySelector('.splash-4');

    setTimeout(() => {
        splashText.style.opacity = '1';
        splashText.style.transform = 'translateY(0)';

        setTimeout(() => {
        	splashP.style.opacity = '1';
        	splashP.style.transform = 'translateY(0)';

            setTimeout(() => {
                splash1.style.opacity = '1';
                splash1.style.transform = 'translateY(0)';

                setTimeout(() => {
                    splash2.style.opacity = '1';
                    splash2.style.transform = 'translateY(0)';

                    setTimeout(() => {
                        splash3.style.opacity = '1';
                        splash3.style.transform = 'translateY(0)';

                        setTimeout(() => {
                            splash4.style.opacity = '1';
                            splash4.style.transform = 'translateY(0)';
                        }, 150);
                    }, 150);
                }, 150);
            }, 150);
        }, 150);
    }, 150);
});

window.addEventListener('scroll', function() {
    const element = document.getElementsByClassName('scroll-text'); // id로 해당 요소
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