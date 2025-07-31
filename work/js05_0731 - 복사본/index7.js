//534p
let memNum = parseInt(prompt("입장객 수를 입력하세요."));
let colNum = parseInt(prompt("한 줄에 앉을 사람 수를 입력하세요."));

if(isNaN(memNum) || isNaN(colNum)){
    alert("숫자만 입력해주세요.");
}else{
    if(memNum % colNum === 0){
        rowNum = memNum / colNum;
    }else{
        rowNum = parseInt(memNum / colNum) + 1;
    }
    document.write(`모두 ${rowNum}개의 줄이 필요합니다.`);
}


