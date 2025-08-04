// 1. concat : "*** 고객님 안녕하십니까?" 배열합치기
const array1 = ["홍", "길", "동"];
const array2 = ["고객님 안녕하십니까?"];
const array3 = array1.concat(array2);

document.writeln("1번. concat :"+array3.join("_"));
document.writeln("<hr/>");

// 2. join : "*_*_*_ 고객님 안녕하십니까"
const array4=array3.join("_");
console.log(array4);
document.writeln("2번. join :"+array4);
document.writeln("<hr/>");

// 3. push
const array5 = ["홍", "길", "동"];
const array6 = array5.push("안녕하십니까?");

console.log(array5);
document.writeln("3번. push :"+array5.join("_"));
document.writeln("<hr/>");

// 4. unshift : 수원역지점 *_*_*_고객님 안녕하십니까!"
const array7 = ["홍", "길", "동","고객님 안녕하십니까?"];
const array8 = array7.unshift("수원역지점");

console.log(array7);
document.writeln("4번. unshift :"+array7.join("_"));
document.writeln("<hr/>");


// 5. pop : "수원역지점 *_*_*_ 고객님 안녕하십니까!"
const array9 = ["홍", "길", "동","고객님 안녕하십니까?","반가워요"];
const array10 = array9.pop();

console.log(array9);
document.writeln("5번. pop :"+array9.join("_"));
document.writeln("<hr/>");

// 6. shift : "*_*_*_고객님 안녕하십니까"
const array11 = ["반가워요","홍", "길", "동","고객님 안녕하십니까?"];
const array12 = array11.shift();

console.log(array11);
document.writeln("6번. shift :"+array11.join("_"));
document.writeln("<hr/>");


// 7. splite : "*_*_*_ 고객님 안녕하십니까"
const array13 = "홍_길_동_ 고객님 안녕하십니까?";
const array14 = array13.split(" ");

console.log(array14[0]);
document.writeln("7번. splite :"+array14.join("_"));
document.writeln("<hr/>");

// 8. splite : "*_*_*_"
document.writeln("8번. splite :"+array14[0]);
document.writeln("<hr/>");