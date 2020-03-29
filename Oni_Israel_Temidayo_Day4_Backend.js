function intersectionOfArray(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}
var colors1 = ["red","blue","green"];
var colors2 = ["red","yellow","blue"];
var intersectingColors=intersectionOfArray(colors1, colors2);
alert(intersectingColors)
