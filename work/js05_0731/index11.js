let memNum = parseInt(prompt("가로 줄에 몇 명이 앉습니까?"));
let colNum = parseInt(prompt("세로 줄에 몇 명이 앉습니까?"));

document.writeln("<h2>자리배치도</h2>");
document.writeln('<div id="result">');
for(let i=1; i<=memNum ; i++){
    document.writeln(`<span>좌석 ${i}</span>`);
    if(i % colNum == 0 && i > 1)
        document.writeln("<br/>");
    
}
document.writeln("</div>");
