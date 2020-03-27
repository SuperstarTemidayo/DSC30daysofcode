var cnt = 0;
var str = [];
var mtc = "aeiouAEIOU";
function vow(str){
 for (var stp = 0; stp <= str.length - 1; stp++){
  if (mtc.match(str[stp])){cnt++;}
 }
 return cnt;
}
window.onload = function(){
    alert(vow(prompt("input string"))+" vowels");
};