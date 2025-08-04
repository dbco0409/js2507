// 상수에 함수를 정의한다.
const hi = function (){
    return "안녕";
}

console.log(hi);
console.log(typeof hi);

const h2 = () => {return "안녕2";}
console.log(h2);
console.log(typeof h2)

const h3 = () => "안녕3";
console.log(h3);
console.log(typeof h3);

//// case4. 상수에 에로우 함수를 정의한다.

const h4 = user => {`${user}님 안녕하세요.`}
console.log(h4);
console.log(typeof h4);

//// case5. 상수에 에로우 함수를 정의한다.

const h5 = (a,b) => a+b;
console.log(h5);
console.log(typeof h5);

/// ------

myfunc = (a,b) => a*b;
let result = myfunc(4,5);
console.log(`결과는 ${result}`);