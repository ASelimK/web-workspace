var aks = new Object();
aks.index = 3;
aks.index.type = "1. bölgede";
aks.rotation = "small";
console.log(aks["rotation"]); 

var x = {
    name: "adf",
    dsdfa: "gg",
    rr : 2,
    ratata: {
        fname: "asdf",
        lname: "adfg"
    }
};
console.log(x)

function hifive(x){
    return x*5;
}

hifive.version = "v.1.0.0";
console.log(hifive);
console.log(hifive.toString());
console.log(hifive.version);

function makeMultiplier(multiply){
    var myFunc = function(x){
        return multiply * x;
    };
    return myFunc ;
}

var mb3 = makeMultiplier(3);
console.log(mb3);  


var a, b, c, d, e;
a = 7;
b = 7;
b+=8;
console.log(a);
console.log(b);

// console.log();
// console.log();
// console.log();

function circle(radius){
    console.log(this);
}
var circ = new circle(10);
console.log(circ);

function blue(lyrics){
    this.lyrics = lyrics;
}

blue.prototype.getlyrics = function (){
    return this.lyrics;}

var x = new blue("almost");
console.log(x);
console.log("-------------------");


var hexagon = {
    length: 10,

    getArea: function(){
        var self = this;
        console.log(this.length);
    
        var increaseRadius = function (){
            this.length = 230;
        };
        increaseRadius();
        console.log(this);
    }   
};
console.log(hexagon.getArea());