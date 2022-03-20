var array = new Array();
array[0] = "eyyy";
array[1] = 2;
array[2] = function(x,y){return x*y;};
array[3] = {course: "MATH101"};
console.log(array);
console.log(array[1]);
console.log(array[2](5,4));
console.log(array[3].course);
var names = [124,12,2134];

for (var i = 0; i<9; i++){
    console.log(i);
}

var Gon = function(gonnumber, color, degree, importance){
    this.gonnumber = gonnumber;
    this.color = color;
    this.degree = degree;
    this.importance = importance;
}

Gon.prototype.getGon = function(){
    console.log(this);
}

var circle1 = new Gon(1,"red", 3, 2);
var square = new Gon(2,"blue", 3, 5);

circle1.getGon();
square.getGon();
console.log(circle1);

for(var x in square){
    console.log(x + ": " + square[x]);
}