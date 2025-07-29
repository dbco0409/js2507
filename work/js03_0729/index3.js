let userNumber = parseInt(prompt('숫자를 입력하세요.'));
let result = 0;

if(userNumber % 3 === 0)
    result = "3의 배수 입니다.";
else 
    result ="3의 배수가 아닙니다.";
      
alert(result);