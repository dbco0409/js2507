//530p
var seed = 3;
for (let i=1; i<=5; i++){
    var seed = 5;
    var result = seed * i;;
    console.log(result)
}

let x = 10;

function display(){
    console.log(x);
    console.log(y);
    let y=20;
}

display();

const user = "Kim";
console.log(`My Name is ${user}`);


function addNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let result = addNumber(2, 3);
document.writeln(`두 수를 더한 값: ${result}`);

function calcSum(n){
    let sum = 0;
    for (let i=0; i<n; i++){
        sum += i;
    }
    document.writeln(`1부터 ${n}까지 더하면 ${sum}`);

    let userNumber = prompt("얼마까지 더할까요?");
    if(userNumber !== null){
        calcSum(parseInt(userNumber));
    }
}

let sum = function (a,b){
    return a+b;
}
document.writeln(`함수 실행 결과 : ${sum(10, 20)}`)

