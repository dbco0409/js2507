// let userNumber = parseInt(prompt('숫자를 입력해주세요.'))

// if(userNumber & 3 === 0)
//     alert('3의 배수 입니다.');
// else
//     alert('3의 배수가 아닙니다.')

// let userNumber = prompt('숫자를 입력하세요.');

// if(userNumber !== null){
//     if(parseInt(userNumber) % 3 === 0)
//         alert('3의 배수 입니다.')
//     else
//         alert('3의 배수가 아닙니다.');
// }
// else
//     alert('입력이 취소됐습니다.');

let userNumber = parseInt(prompt('숫자를 입력하세요.'));

if(userNumber !== null)
    (parseInt(userNumber) % 3 === 0)? alert('3의 배수 입니다.') : alert('3의 배수가 아닙니다.');
else
    alert('입력이 취소됐습니다.');


let numberOne = parseInt(prompt("50 미만인 숫자를 입력하세요."));
let numberTwo = parseInt(prompt("50 미만인 숫자를 입력하세요."));

if(numberOne < 10 || numberTwo < 10)
    alert("숫자 2개 중에서 최소한 하나는 10미만이군요.")
else
    alert("숫자 2개 중에서 10미만인 수는 없습니다.")