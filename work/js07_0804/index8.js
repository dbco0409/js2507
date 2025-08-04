let nums = [1,2,3];
let chars = ['a','b','c','d'];

// 배열 2개 합치기
let numsChars = nums.concat(chars);
let charsNums = chars.concat(nums);
document.writeln(`nums에 chars합치면: ${numsChars}, <br> chars에 nums합치면 : ${charsNums}`);
document.writeln(`<hr>`);


let nums2 = [1,2,3];
let chars2 = ['a','b','c','d'];

// 배열 안의 요소 합치기
let string1 = nums.join();
document.writeln(`구분자 없이: ${string1}<br/>`);
let string2 = chars2.join('/');
document.writeln(`/ 구분자 지정 : ${string2}`);
document.writeln(`<hr/>`);



let nums3 = [1,2,3];
let chars3 = ['a','b','c','d'];

// 요소 추가하기 - 새로운 length값 변환
let ret1 = nums3.push(4,5);// 배열 끝에 추가
document.writeln(`length : ${ret1} | 배열: ${nums3}<br/>`);

let ret2 = nums3.unshift(0); // 배열 앞에 추가
document.writeln(`length : ${ret2} | 배열: ${nums3}`);
document.writeln(`<hr/>`);


let nums4 = [1,2,3];
let chars4 = ['a','b','c','d'];

// 요소 추출하기 - 꺼낸 요솟값 반환
let popped1 = chars.pop(); // 마지막 요소 꺼냄
document.writeln(`꺼낸 요소 : ${popped1}, | 배열: ${chars}<br/>`);


let popped2 = chars.pop(); // 첫번째 요소 꺼냄
document.writeln(`꺼낸 요소 : ${popped2}, | 배열: ${chars}<br/>`);
document.writeln(`<hr/>`);

// 인수가 1개일 경우
let study = ['html', 'css', 'javascript','jquery','react','nodejs'];
let js = study.splice(2);
document.writeln(`반환된 배열: ${js}<br/>`);
document.writeln(`변경된 배열: ${js}<br/>`);

//인수가 2개일 경우
let jquery = study.splice(1,1);
document.writeln(`반환된 배열: ${jquery}<br/>`);
document.writeln(`변경된 배열: ${js}<br/>`);

// 인수가 3개 이상인 경우
let modernJs = study.splice(1,0,'typescript');
document.writeln(`반환된 배열: ${modernJs}<br/>`);
document.writeln(`변경된 배열: ${js}<br/>`);

let colors = ["red","green","blue","white","black"];
document.writeln(colors.slice(2)); // 인덱스 2부터 끝까지
document.writeln("<hr/>");
document.writeln(colors.slice(2,4)); // 인덱스 2,3



//
console.log(new Date());
console.log(new Date('\n2024-02-25\n'));
console.log(new Date('2024-02-25T18:00:00\n\n'));

console.log(new Date("2024\n"));
console.log(new Date("2024-02\n"));
console.log(new Date("2024-02-25\n"));

console.log(new Date('2024-02-25T18:00:00\n'));
console.log(new Date('2024-02-25T18:00:00Z\n\n'));

console.log(new Date('02/25/2024\n'));

console.log(new Date('Mon Jan 20 2024 15:00:41 GMT+0900 (대한민국 표준시)\n'));



