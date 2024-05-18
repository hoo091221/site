document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        select();
    }
});

function select() {
    const selectList = document.getElementById("select")
    const val = document.getElementById('value').value;
    const sel = selectList.options[selectList.selectedIndex].value;
    const res = document.getElementById('log');

    if (sel == "2진수")
        res.innerHTML = two(val);
    else if (sel == "4진수")
        res.innerHTML = four(val);
    else if (sel == "8진수")
        res.innerHTML = eight(val);
    else if (sel == "16진수")
        res.innerHTML = sixteen(val);

}

// 십진수 -> 이진수
function two(ten) {
    var num = 1;
    var val = document.getElementById('log').value;
    while (ten >= num) {
        var num = num + num;
        var binary = "";
    }
    while (ten != 0) {
        if (ten >= num) {
            var ten = ten - num;
            var binary = binary + "1";
            var num = num / 2;
        } else if (ten < num) {
            var binary = binary + "0";
            var num = num / 2;
        }
    }
    while (num != 0.5) {
        var num = num / 2;
        var binary = binary + "0";
    }

    var first = binary.charAt(0);
    if (first == 0) {
        var binary = binary.substr(1, binary.length - 1);
    }
    return binary;

}

// 십진수 -> 4진수
function four(ten) {
    var num = 1;
    var val = document.getElementById('log').value;
    while (ten >= num) {
        var num = num + num;
        var binary = "";
    }
    while (ten != 0) {
        if (ten >= num) {
            var ten = ten - num;
            var binary = binary + "1";
            var num = num / 2;
        } else if (ten < num) {
            var binary = binary + "0";
            var num = num / 2;
        }
    }
    while (num != 0.5) {
        var num = num / 2;
        var binary = binary + "0";
    }

    var first = binary.charAt(0);
    if (first == 0) {
        var binary = binary.substr(1, binary.length - 1);
    }


    var binary = binary.toString();
    var digit = binary.length;
    var num;
    var four = " ";
    if (digit % 2 == 1) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }
    while (num < digit) {
        while (num <= digit) {
            var two = binary.charAt(num) + binary.charAt(num + 1);
            if (two == 0o0 && two == 0) {
                var four = four + "0";
            } else
            if (two == 0o1 && two == 1) {
                var four = four + "1";
            } else
            if (two == 10) {
                var four = four + "2";
            } else
            if (two == 11) {
                var four = four + "3";
            }
            var num = num + 2;
        }
    }
    return four;
}

// 십진수 -> 8진수
function eight(ten) {
    var num = 1;
    while (ten >= num) {
        var num = num + num;
        var binary = "";
    }
    while (ten != 0) {
        if (ten >= num) {
            var ten = ten - num;
            var binary = binary + "1";
            var num = num / 2;
        } else if (ten < num) {
            var binary = binary + "0";
            var num = num / 2;
        }
    }
    while (num != 0.5) {
        var num = num / 2;
        var binary = binary + "0";
    }

    var first = binary.charAt(0);
    if (first == 0) {
        var binary = binary.substr(1, binary.length - 1);
    }


    var binary = binary.toString();
    var digit = binary.length;
    var num = 0;
    if (digit % 3 != 0) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }
    if (digit % 3 != 0) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }

    var eight = "";
    while (num < digit) {
        var two = binary.charAt(num) + binary.charAt(num + 1) + binary.charAt(num + 2);
        if (two == "000") {
            var eight = eight + "0";
        } else
        if (two == "001") {
            var eight = eight + "1";
        } else
        if (two == "010") {
            var eight = eight + "2";
        } else
        if (two == "011") {
            var eight = eight + "3";
        } else
        if (two == "100") {
            var eight = eight + "4";
        } else
        if (two == "101") {
            var eight = eight + "5";
        } else
        if (two == "110") {
            var eight = eight + "6";
        } else
        if (two == "111") {
            var eight = eight + "7";
        }
        var num = num + 3;
    }
    return eight;
}

// 십진수 -> 16진수
function sixteen(ten) {
    var num = 1;
    while (ten >= num) {
        var num = num + num;
        var binary = "";
    }
    while (ten != 0) {
        if (ten >= num) {
            var ten = ten - num;
            var binary = binary + "1";
            var num = num / 2;
        } else if (ten < num) {
            var binary = binary + "0";
            var num = num / 2;
        }
    }
    while (num != 0.5) {
        var num = num / 2;
        var binary = binary + "0";
    }

    var first = binary.charAt(0);
    if (first == 0) {
        var binary = binary.substr(1, binary.length - 1);
    }


    var binary = binary.toString();
    var digit = binary.length;
    var num = 0;
    if (digit % 4 != 0) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }
    if (digit % 4 != 0) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }
    if (digit % 4 != 0) {
        var binary = "0" + binary;
        var digit = digit + 1;
    }
    var eight = "";
    while (num < digit) {
        var two = binary.charAt(num) + binary.charAt(num + 1) + binary.charAt(num + 2) + binary.charAt(num + 3);
        if (two == "0000") {
            var eight = eight + "0";
        } else
        if (two == "0001") {
            var eight = eight + "1";
        } else
        if (two == "0010") {
            var eight = eight + "2";
        } else
        if (two == "0011") {
            var eight = eight + "3";
        } else
        if (two == "0100") {
            var eight = eight + "4";
        } else
        if (two == "0101") {
            var eight = eight + "5";
        } else
        if (two == "0110") {
            var eight = eight + "6";
        } else
        if (two == "0111") {
            var eight = eight + "7";
        } else
        if (two == "1000") {
            var eight = eight + "8";
        } else
        if (two == "1001") {
            var eight = eight + "9";
        } else
        if (two == "1010") {
            var eight = eight + "A";
        } else
        if (two == "1011") {
            var eight = eight + "B";
        } else
        if (two == "1100") {
            var eight = eight + "C";
        } else
        if (two == "1101") {
            var eight = eight + "D";
        } else
        if (two == "1110") {
            var eight = eight + "E";
        } else
        if (two == "1111") {
            var eight = eight + "F";
        }
        var num = num + 4;
    }
    return eight;
}