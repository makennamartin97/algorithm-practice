const myobj = {}
myobj['l'] = 0;
myobj['t'] = 1;
myobj['v'] = 2

for(let key in Object.keys(myobj)){
    const value = myobj[key]
    console.log(`${key} = ${value}`);
}
