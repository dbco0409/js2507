//선언부
let num1, num2, result;

num1 = 5; num2 = 10; result=0;

//구현부
result = num+num2;
console.log(result);

result = num2 - num1;
console.log(result);

result = num2 = num1;
console.log(result);

result = num2 / num1;
console.log(result);

result = num2 % num1; 
console.log(result);

// ++ 선행, --성행, 후행++, 후행--
result = --num
console.log(`--선행 결과는 ${result}, 변수값은 ${num3} 이다`);

result = num++
console.log(`후행++ 결과는 ${result}, 변수값은 ${num3} 이다`);

// -- 선행, 후행++, 후행--
result = num--;
console.log(`후행-- 결과는 ${result}, 변수값은 ${num3} 이다`);

result = ++num;
console.log(`++선행 결과는 ${result}, 변수값은 ${num3} 이다`);

document.getElementById("result").innerHTML=`<h3>${num1+num2}</h3>`;