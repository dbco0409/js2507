let now = new Date();
document.writeln(`현재 시간은 ${now.toLocaleDateString()}`);

///page592
d= document;
d.writeln(`Locale 현재 시각은 : `+now.toLocaleString());

/// 593
// let arr1  = new Array();
// let arr2  = new Array();

// 593_2
// let arr3 = ["One", "Two","Three", "Four"];
// let arr4 = Array("one", "two", "three","four");

let numbers = ["one","two","two","four"]

for(let i=0; i<4; i++){
    d.writeln(`<p>${numbers[i]}</p>`);
}