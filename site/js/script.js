var makedividor = function(dividor){
  
    console.log(dividor);

    return(function(x){
        return x/dividor;
    });
}

var dividorby3 = makedividor(3);
console.log("__________________");
console.log(dividorby3(300));