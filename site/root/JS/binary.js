function sqrt() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    d = (b ** 2 - 4 * a * c) / (2 * a);
    x1 = `${-b / (2 * a)}±√${d}`;

    if (d == 0) { // 중근인 경우
        x3 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
        x1 = x3;
        x3 = '';
        x4 = '';

        document.getElementById('log4').innerHTML = '중근입니다.';

        x1 = `해 (실수 형태): ${x1}`;
    } else if (d < 0) {
        d = `${-d}𝑖`; // 허근인 경우
        x1 = `해 (허수 형태) ${-b / (2 * a)}±√${d}`;
        x3 = '';
        x4 = '';
        document.getElementById('log4').innerHTML = '허근입니다.';
    } else { // 기타 근이 2개인 경우
        x3 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
        x4 = -b / (2 * a) - Math.sqrt(d) / (2 * a);
    }

    if (x1.includes('해 (실수 형태)') || x1.includes('해 (허수 형태)')) {
        document.getElementById('log1').innerHTML = `${ x1 }`;
    } else if (x1 != '') {
        document.getElementById('log1').innerHTML = `해 (유리수 ± 제곱근 형태) ${ x1 }` + '<br>';
    } else {
        document.getElementById('log1').innerHTML = ``;
    }

    if (x3 != '') {
        document.getElementById('log2').innerHTML = `해 1 (실수 형태) ${ x3 }`;
    } else {
        document.getElementById('log2').innerHTML = ``;
    }

    if (x4 != '') {
        document.getElementById('log3').innerHTML = `해 2 (실수 형태) ${ x4 }`;
    } else {
        document.getElementById('log3').innerHTML = ``;
    }

    console.log(x1, x3, x4)
}

function solution(n) {
    let result = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            result.push(divisor)
            n = n / divisor;
        } else divisor++;

    }

    return n;
}

function Discrimination() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    x = b ** 2 - 4 * a * c;

    if (x == 0) { // 근이 1개
        document.getElementById('log1').innerHTML = '중근(근이 1개)을 가지고 있습니다.';
    } else if (x > 0) { // 근이 2개
        document.getElementById('log1').innerHTML = '근이 2개 존재합니다.';
    } else if (x < 0) { // 근이 0개
        document.getElementById('log1').innerHTML = '허근(실제의 근이 없음)을 가지고 있습니다.';
    }
    document.getElementById('log2').innerHTML = '';
    document.getElementById('log3').innerHTML = '';
    document.getElementById('log4').innerHTML = '';
}