// script

// 슬라이드 스크롤 ----------------------------
// throttle 함수 정의
function _throttle(callback, delay) { // delay 에는 속도가 들어감
    let timeoutId;
    return function(...args) { // ...args 에 이벤트 객체(e)가 들어감
        if (!timeoutId) {
            // 지정된 시간이 지나면 콜백을 실행하고 timeoutId를 재설정
            timeoutId = setTimeout(function() {
                callback.apply(null, args);
                timeoutId = null;
            }, delay);
        }
    };
}

let activeIndex = 0; // [0, 1, 2]
const $body = document.querySelector('body');
const slideArr = Array.from(document.querySelectorAll('.swiper-slide'));
const page_03 = document.querySelector('.page3');
const page_03Top = page_03.offsetTop;

function preventScroll(e) {
    e.preventDefault();
}

// 스크롤 이벤트 핸들러
const throttledScrollHandler = _throttle(function() {
    const windowY = window.scrollY;
    if (page_03Top <= windowY && windowY <= page_03Top + 100) {
        // 스크롤 방지
        $body.addEventListener('wheel', preventScroll, { passive: false });
        console.log('dd');
    }
    if (!page_03.classList.contains('currentActive')) {
        $body.removeEventListener('wheel', preventScroll, { passive: false });
    }
}, 500);
window.addEventListener('scroll', throttledScrollHandler);

const throttledMousewheelHandler = _throttle(function(e) {
    if (e.deltaY > 0) { // 마우스 휠 down
        if (activeIndex !== slideArr.length - 1) {
            activeIndex = slideArr.findIndex((slide) => slide.classList.contains('active'))
            slideArr[activeIndex].classList.remove('active')
            slideArr[activeIndex + 1].classList.add('active')
            activeIndex = activeIndex + 1;
            console.log('down')
        } else {
            $body.removeEventListener('wheel', preventScroll, { passive: false });
        }
    } else if (e.deltaY < 0) { // 마우스 휠 up
        if (activeIndex !== 0) {
            activeIndex = slideArr.findIndex((slide) => slide.classList.contains('active'))
            slideArr[activeIndex].classList.remove('active')
            slideArr[activeIndex - 1].classList.add('active')
            activeIndex = activeIndex - 1;
            console.log('up')
        } else {
            $body.removeEventListener('wheel', preventScroll, { passive: false });
        }
    }
}, 500);

page_03.addEventListener('mousewheel', throttledMousewheelHandler);

// 화면이 resize 되었을 때
window.addEventListener('resize', function() {
    sdCut_08Top = sdCut_08.offsetTop;
    window.addEventListener('scroll', throttledScrollHandler);
    sdCut_08.addEventListener('mousewheel', throttledMousewheelHandler);
});

// 풀페이지 스크롤
function startScrollFullPage() {
    //풀페이지 스크롤되는 코드 
}
startScrollFullPage()