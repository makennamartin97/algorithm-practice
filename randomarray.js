function randomarray(){
    x = [];
    for(var i = 0; i < 10; i++){
        var y = Math.floor(Math.random()*101 )

        x.push(y);


    }
    return x;
}
console.log(randomarray());