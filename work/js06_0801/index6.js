let my = (a,b) => a*b;

// 화살표 전
let my2 = function (){
    return "헬로우 월드!"
}

// 화살표 후
let my3 = () => "헬로우 월드";


// 매개변수가 있는 화살표 함수
hello = (val) => "hello! "+val;

//괄호가 없는 화살표 함수
hello2 = val => "hello" + val;



hello = function (){
    document.getElementById("demo").innerHTML += this;
}

window.addEventListener("load",hello);

document.getElementById("btn").addEventListener("click", hello);



// 화살표 함수는 함수의 소유자를 this로 나타냅니다.
hello = () => {
    document.getElementById("demo").innerHTML += this;
}

window.addEventListener("load", hello);

document.getElementById("btn").addEventListener("click", hello);



//화살표 함수

//function 키워드, return키워드, 중괄호는 필요 없습니다.
var x = (x,y) => x * y;
const xx = (x,y) => x*y;


