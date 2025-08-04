let txt;
const frm = document.forms['frm'];
for(let i=0; i<frm.length; i++){
    txt = frm[0].value;
}
document.getElementById("result").innerHTML=txt;