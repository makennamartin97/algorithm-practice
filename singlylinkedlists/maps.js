const numbersmap= new Map();

numbersmap.set(1, 'one');

numbersmap.set(2, 'two');

const keysOfMap= [...numbersmap.keys()];

console.log(keysOfMap);

const valsOfMap= [...numbersmap.values()];

console.log(valsOfMap);

console.log(numbersmap.size)

for(let p of numbersmap){
    console.log(p)
}

var map = new Map();//Empty 
map.set(1,'1');
map.set('one', 1);
map.set('{}', {name:'Hello world'});
map.set(12.3, 12.3)
map.set([12],[12345])

for(let [key,value] of map){
    console.log(key+'---'+value)
}
const myobj = {}
myobj['l'] = 0;
myobj['t'] = 1;
myobj['v'] = 2

for(let key in Object.keys(myobj)){
    const value = myobj[key]
    console.log(`${key} = ${value}`);
}
