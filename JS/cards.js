
window.onload = function () {
    setInterval(cards, 100);
}

function cards() {
    var container = document.querySelectorAll('.card');
    container.forEach((container) => {
        container.addEventListener('mousemove', function (c) {
            var x = c.offsetX;
            var y = c.offsetY;
            
            var rotateY = -1 / 10 * (x -150);
            var rotateX = 1 / 5 * (y -150);
            container.style = `transform : perspective(100vw) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            container.style.width = '18rem';
        })
        container.addEventListener('mouseout', function () {
            container.style = 'transition-duration: 100ms';
            container.style = 'transform : perspective(350px) rotateX(0deg) rotateY(0deg)';
            container.style = 'width: 18rem';
        })
    })
}
