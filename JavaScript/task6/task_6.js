function splitString() {
    var text = document.getElementsByTagName("textarea")[0].value;
}

function createBox(text) {
    var p = document.createElement('p');
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    p.innerHTML = text;
    box.appendChild(p);
    return box;
}

function add(i) {
    var queue = document.getElementById('queue');
    var textArr = splitString();
    var j, k;
    for (j = 0, k = textArr.length; j < k; j++) {
        var box = createBox(text[j]);
        if (i == 1) {
            queue.appendChild(box);
        } else {
            queue.insertBefore(box, queue.firstChild);
        }
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