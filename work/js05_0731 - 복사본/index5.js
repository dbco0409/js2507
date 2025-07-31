//532p
let numberOne = parseInt(prompt("50미만인 숫자를 입력하세요."));
let numberTwo = parseInt(prompt("50미만인 숫자를 입력하세요."));

if(numOne < 50 && numberTwo < 50)
    alert("숫자 2개 모두 50미만이군요.");
else if(numOne < 50 || numberTwo < 50)
    alert("둘 중 하나만 50미만이군요.");
else
    alert("조건에 맞지 않는 숫자가 있습니다.")
    

// 둘 중 하나만 숫자가 아니어도 연산하지 않음
// if(isNaN(numberOne) || isNaN(numberTwo)){
//     alert("숫자가 아닌 값을 비교할 수 없습니다.");
// }else{
//     if(numOne < 50 && numberTwo < 50)
//         alert("숫자 2개 모두 50미만이군요.");
//     else if(numOne < 50 || numberTwo < 50)
//         alert("둘 중 하나만 50미만이군요.");
//     else
//         alert("조건에 맞지 않는 숫자가 있습니다.")
// }
    
// 둘 중 하나만 숫자가 아니어도 연산하지 않음
if(!isNaN(numberOne) && isNaN(numberTwo)){
    if(numOne < 50 && numberTwo < 50)
        alert("숫자 2개 모두 50미만이군요.");
    else if(numOne < 50 || numberTwo < 50)
        alert("둘 중 하나만 50미만이군요.");
    else
        alert("조건에 맞지 않는 숫자가 있습니다.")
}
    


