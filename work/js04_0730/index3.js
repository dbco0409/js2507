var myDate = new Date();
var myHour = myDate.getHours();
var myMin = myDate.getMinutes();
var hourStr = String(myHour).padStart(2, '0');
var minStr = String(myMin).padStart(2, '0');

document.getElementById("hour").value = hourStr;
document.getElementById("min").value = minStr;

bgSetting(myHour, myMin);

function bgSetting(myHour, myMin) {
    let inputHour = document.getElementById("hour").value;
    let inputMin = document.getElementById("min").value;

    let hours = (inputHour === '') ? myHour : parseInt(inputHour);
    let mins = (inputMin === '') ? myMin : parseInt(inputMin);

    hourStr = String(hours).padStart(2, '0');
    minStr = String(mins).padStart(2, '0');

    let Msg = `지금시간 - <span>${hourStr}:${minStr}</span>`;
    let greeeting_img = "";

    // 예시용으로 시간 범위 설정
    let timeAM = 9; // 오전 0시 ~ 11시까지
    let timePM = 17; // 오후 12시 ~ 17시까지

    if (hours < timeAM) {
        Msg += `<br/>굿모닝! 오늘도 화이팅!`;
        greeeting_img = "1.jpg";
    } else if (hours < timePM) {
        if ((hours === 12 && mins >= 50) || (hours === 13 && mins < 50)) {
            Msg += `<br/>점심 시간!`;
            greeeting_img = "5.jpg";
        }else if (mins > 50) {
            Msg += `<br/>쉬는 시간!`;
            greeeting_img = "4.jpg";
        } else {
            Msg += `<br/>열공하세요!`;
            greeeting_img = "2.jpg";
        }
    } else {
        Msg += `<br/>퇴근!!`;
        greeeting_img = "3.jpg";
    }

    console.log(Msg);

    document.getElementById('result').innerHTML = Msg;
    document.getElementById('bg').style.background = `url('images/${greeeting_img}')`;
}
