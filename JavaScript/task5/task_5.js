function isNum(val) {
    if (typeof(Number(val)) === 'number') {
        if ((val <= 100) && (val >= 10) && (val % 1 === 0)) {
            return true;
        }
    } else {
        return false;
    }
}

function getVal() {
    var input = document.getElementsByTagName("input")[0];
    var val = input.value;
    if (val !== '') {
        val = Number(val);
    }
    if (typeof(val) === 'number' && !Number.isNaN(val)) { //Number()会转非数字符为NaN，typeof(NaN)是number
        input.value = '';
        return val;
    } else {
        input.value = '';
        return false;
    }
}

function add(i) {
    var queue = document.getElementById('queue');
    var divLength = document.querySelectorAll('#queue>div').length;
    if (divLength === 60) {
        alert('队列已到最大数目');
    }
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    var num = getVal();
    box.setAttribute('style', "height:" + num / 5 + 'rem');
    console.log(i);
    if (isNum(num)) {
        if (i == 1) {
            queue.appendChild(box);
        } else {
            queue.insertBefore(box, queue.firstChild);
        }
    } else {
        alert('请输入正确的数值');
    }
}

function pop(i) {
    var queue = document.getElementById('queue');
    var box
    if (i == 0) {
        box = queue.firstChild;
    } else {
        box = queue.lastChild;
    }
    queue.removeChild(box);
}