function sqrt() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    x1 = `${-b / (2 * a)}+√${(b ** 2 - 4 * a * c) / (2 * a)}`;
    x2 = `${-b / (2 * a)}-√${(b ** 2 - 4 * a * c) / (2 * a)}`;

    x3 = -b / (2 * a) + Math.sqrt(b ** 2 - 4 * a * c) / (2 * a);
    x4 = -b / (2 * a) - Math.sqrt(b ** 2 - 4 * a * c) / (2 * a);

    if ((b ** 2 - 4 * a * c) == 0) { // 중근인 경우
        return document.getElementById('log').innerHTML = `해: ${x3}` + '<br>중근이네요!';
    } else if ((b ** 2 - 4 * a * c) < 0) { // 근이 없는 경우
        return document.getElementById('log').innerHTML = `해가 없네요!`;
    } else if (typeof x3 === int) {
        x1 = x3;
        x2 = x4;
    }

    document.getElementById('log').innerHTML = `해 1: ${ x1 } ` + '<br>' + ` 해 2: ${ x2 }` + '<br>' + `해 1: ${ x3 } ` + '<br>' + ` 해 2: ${ x4 }`;
}