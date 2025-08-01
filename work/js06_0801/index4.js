// (function (){
//     let userName = prompt("이름을 입력하세요.");
//     document.writeln(`<p>안녕하세요? <span class="accent">${userName}</span>님!</p>`);
// }())

// 매개변수가 있는 즉시실행 함수

// (function (a,b){
//     sum = a+b;
// }(100,200))
// document.writeln(`함수 실행 결과 : ${sum}`)

// 매개 변수가 없는 함수
// const hi = function (){
//     return "안녕하세요.";
// }


// 매개변수가 있는 함수 
// const h1 = () => {return "안녕하세요?"};

// // 중괄호 생략
// const hi = () => "안녕하세요?";

// //매개변수가 1개인 함수
// let hi = function (user){
//     document.writeln(user + "님, 안녕하세요.");
// }

// 매개변수가 1개인 함수
// let hi = user => {document.writeln(`${user}님 안녕하세요.`);}

// let sum = function (a,b){
//     return a+b;
// }

// let sum = (a,b) => a+b;

// 즉시실행 함수
(function(){
    let userName = prompt("이름을 입력하세요.");
    document.writeln(`<p>안녕하세요? <span>${userName} 입니다.</span></p>`)
}())

// 매개 변수가 있는 즉시실행 함수(익명함수)
(function (a,b){
    sum = a+b;
}(100, 200))
document.writeln(`함수 실행결과 : ${sum}`);

const hi = function (){
    return "안녕하세요?";
}

const hii = () => {return "안녕하세요?"}

const hiii = () => "안녕하세요.";

let hie =function(user){
    document.writeln(user+"님 안녕하세요.");
}

let hia = (user) => {document.writeln(`${user}님 안녕하세요.`)}

let sum = function (a,b){
    return a+b;
}

let summ = (a,b) => a+b;

