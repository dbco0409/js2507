let colNum = parseInt(prompt("가로(한 줄에 몇 명이 앉습니까?)"), 10); // 열
    let rowNum = parseInt(prompt("세로(줄이 몇 줄입니까?)"), 10);         // 행

    if (isNaN(colNum) || isNaN(rowNum) || colNum <= 0 || rowNum <= 0) {
      document.write("<p>올바른 숫자를 입력해주세요.</p>");
    } else {
      const totalSeats = colNum * rowNum;

      document.write("<h2>자리 배치도</h2>");
      document.write('<div id="result">');

      for (let i = 1; i <= totalSeats; i++) {
        document.write(`<span class="seat">좌석 ${i}</span>`);
        
        if (i % colNum === 0) {
          document.write("<br/>");
        }
      }

      document.write("</div>");
    }