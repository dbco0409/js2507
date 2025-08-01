//함수 정의하기
let myVar;
function addNumber(){
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    myVar = sum;

    console.log(`결과값 : ${sum}`);
}

addNumber();
console.log(`결과값 : ${myVar}`);