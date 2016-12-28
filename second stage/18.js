function isNum(val){
  if(typeof (Number(val)) === 'number'){
    return true;
  }
  else{
    return false;
  }
}
function getVal(){
  var input = document.getElementsByTagName("input")[0];
  var val = input.value;
  if(val !== ''){
    val = Number(val);
  }
  if(typeof(val)==='number'&&!Number.isNaN(val)){//Number()会转非数字符为NaN，typeof(NaN)是number
    input.value = '';
    return val;
  }
  else{
    input.value = '';
    alert("Please type number!");
    return false;
  }
}
function add(i){
  var queue = document.getElementById('queue');
  var box = document.createElement('div');
  box.setAttribute('class','box');
  var p = document.createElement('p');
  var num = getVal();
  p.innerHTML = num;
  box.appendChild(p);
  console.log(i);
  if(typeof(num)==='number'){
    if(i==1){
      queue.appendChild(box);
    }
    else{
      queue.insertBefore(box,queue.firstChild);
    }
  }
}
function pop(i){
  var queue = document.getElementById('queue');
  var box
  if(i==0){
    box = queue.firstChild;
  }
  else{
    box = queue.lastChild;
  }
  queue.removeChild(box);
}