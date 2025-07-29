let spring="봄";
let summer = "여름";
let fall = "가을";
let winter ="겨울";

let season = ["봄", "여름", "가을","겨울"];

console.log(season[0])
console.log(season[1])
console.log(season[2])
console.log(season[3])
console.log(typeof season)

// = 대입 연산자의 응용 버전

let num=5;
let result = 1;
let result2 = 2;
console.log(result=result + num);
console.log(result2+=num);

result = 3;
result2 = 2;
console.log(result=result - num);
console.log(result2-=num);

result = 6;
result2 = 6; 
console.log(result=result * num);
console.log(result2*=num);

result = 20;
result2 = 20;

console.log(result=(result / num).toFixed(2));
console.log(result2/=num);

result = 12;
result2 = 12;

console.log(result=result % num);
console.log(result2%=num);
