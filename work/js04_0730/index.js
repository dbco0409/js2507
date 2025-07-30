let myTxt="";
let test="";
const cars=["BMW","볼보","사브","포드","피아트","아우디"];

for(let i= 0; i<cars.length; i++){
    console.log(i);
    console.log(cars[i]);
    myTxt += cars[i]+"<br/>";
}
console.log(myTxt);
document.getElementById("result").innerHTML=myTxt;

// test += cars[0] + "<br/>";
// test += cars[1] + "<br/>";
// test += cars[2] + "<br/>";
// test += cars[3] + "<br/>";
// test += cars[4] + "<br/>";
// test += cars[5] + "<br/>";


/// if (조건문)

// else if (또 다른 조건문)

// else (조건이 해당되지 않으면)

let hour = new Date().getHours();
let msg="";

if(hour < 18){
    msg="Have a Good Day!"   
}else{
    msg="No Good Day!"
}

console.log(msg);
document.getElementById("result").innerHTML=msg;


let myDate = new Date();
let myHour = myDate.getHours();
let greeeting = "";

// 가데이터 <<<<<<<<<<<<<<<<<<<<<
let timeAM = 9; 
let timePM = 18;
myHour = 20; 
// 가데이터 >>>>>>>>>>>>>>>>>

console.log(myDate);
console.log(myHour);

if(myHour < timeAM){
    greeeting = "등원 준비를 해요~";
}else if(myHout < timePM){
    greeeting = "굿 귀가!!!!";
}else{
    greeeting = "열공 ^^\n힘을 내요!"
}

console.log(greeeting);
document.getElementById("result") = greeeting;
