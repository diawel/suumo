function strIns(str,index,insert){
return str.slice(0,index)+insert+str.slice(index,str.length);
}
function suumo(){
var text=document.getElementById("text").value;
if(text){
while(text.length<53){
text+=text;
}
var letters=[...text];
letters.splice(53,letters.length-53);
letters.splice(0,0,"              ");
letters.splice(5,0,"\n       ");
letters.splice(12,0,"\n  ");
letters.splice(16,0,"👁");
letters.splice(18,0,"👁");
letters.splice(22,0,"\n");
letters.splice(32,0,"\n");
letters.splice(42,0,"\n   ");
letters.splice(51,0,"\n        ");
letters.splice(58,0,"\n              ");
letters.splice(63,0,"\n                   」　」");
var suumo=letters.join("");
if(document.getElementById("correction").checked){
suumo=suumo.replace(/[A-Za-z0-9]/g, function(s) {
return String.fromCharCode(s.charCodeAt(0) + 65248)+" ";
});
}
document.getElementById("suumo").value=suumo;
if(!document.getElementById("mute").checked){
document.getElementById("se").play();
}
}
}
function copy(){
var suumo=document.getElementById("suumo");
suumo.selectionStart = 0;
suumo.selectionEnd = suumo.value.length;
suumo.focus();
document.execCommand("copy");
}