// 기본 매개변수 // 매개변수에 기본값을 지정하는 것이 더 좋다.
function myFunction(x,y){
    if(y===undefined){
        y=2;
    }
}

// 매개변수에 기본값을 지정할 수 있다.
function my2(x, y=10){
    return x+y;
}
my2(5);

// 함수 나머지 매개변수 ...를 사용하면 함수가 무한한 개수의 인수를 배열로 처리할 수 있다.
function sum(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}
let xxx = sum(4,9,16,25,29,100,55,77);


// 인수 객체
// 자바스크립트 함수에는 arguments객체라는 내장객체가 있다.

x = findMax(1, 123, 500, 115, 44, 88);
function findMax (){
    let max= -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
// >> 간단한 함수를 사용하여 숫자 목록에서 가장 높은 값을 찾을 수 있다.



x = sumAll (1,123,500, 115, 44, 88);
function sumAll(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
///  함수가 너무 많은 인수와 함꼐 호출되면 arguments객체를 사용하여 해당 인수에 접근할 수 있다.

//인수는 값으로 전달된다.
//객체는 참조로 전달된다.


function mymy(a,b){
    return a * b;
}

mymy(10, 2);


function mymymy(a,b){
    return a*b;
}
window.mymymy(10,2)
//// 값은 함수.


//// 글로벌 객체

let x = myFunction5();
function myFunction5(){
    return this;
}


// 메서드를 이용하여 함수 호출

const myObject = {
    firstName : "John",
    lastName : "Doe",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();

//// fullName 메서드는 함수 입니다. myObject는 함수의 소유자 입니다.


const myObject2 = {
    firstName : "John",
    lastName : "Doe",
    fullName : function (){
        return this;
    }
}
myObject2.fullName();


// 생성자를 사용하여 함수 호출

function myFun(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

const myObj = new myFun("John", "Doe");

myObj.firstName;
