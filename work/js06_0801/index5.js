// 함수 선언
function myFunction (a,b){
    return a*b; 
}

//함수 표현식
const x = function (a,b) {return a*b;}

// 익명식
const xx = function (a,b){return a*b};
let z=xx(4,3);

// 함수 생성자

const myFunction = new Function ("a", "b","return a * b");
let xxx = myFunction(4,3);

// 위와 같음
const myFunction2 = function (a,b) {return a*b};
let xxxx = myFunction2(4,3);


// 함수 호이스팅
// 호이스팅 : 
// 선언문을 현재 범위의 맨 위로 옮기는 자바스크립트 기본 동작 입니다.
// 호이스팅은 변수 선언과 함수 선언에 적용됩니다.

myFunction3(5)

function myFunction3(y){
    return y * y;
}

// 표현식을 사용하여 정의된 함수는 호이스트 되지 않음.


//자체 호출함수(이름이 없는 함수)

(function(){
    let x = "Hello!!";
})()


function myFunction4(a,b){
    return a * b;
}
 
let xa = myFunction4(4,3);



// 함수는 객체 입니다.

function my(a,b){
    return arguments.length;
}
// arguments.length 속성은 함수가 호출될 때 수신된 인수의 개수를 반환합니다.


function my2(a,b){
    return a*b;
}
let text = my2.toString();


