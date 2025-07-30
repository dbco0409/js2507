let myTxt;
let myRandom = Math.random();

console.log(myRandom);

if(myRandom < 0.5){
    myTxt = "0.5보다 작다."
}else{
    myTxt = "0.5보다 작지 않다."
}

console.log(myTxt);
document.getElementById("result").innerHTML=myTxt;
