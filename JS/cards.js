
window.onload = function () {
    setInterval(cards, 100);
}

function cards() {
    var container = document.querySelectorAll('.container1');
    container.forEach((container) => {
        container.addEventListener('mousemove', function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var rotateY = -1 / 20 * x + 10;
            var rotateX = -1 / 20 * y - 10;
            container.style = `transform : perspective(100vw) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        })
        container.addEventListener('mouseout', function () {
            container.style = 'transition-duration: 100ms';
            container.style = 'transform : perspective(350px) rotateX(0deg) rotateY(0deg)';
        })
    })
}