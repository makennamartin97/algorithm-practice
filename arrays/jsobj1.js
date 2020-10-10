// hacker hero js objects 1
// Here, given an array of javascript objects, write a function that print 
// all the students' names and their country.

function displayNameCountry(lists){
    for(var i = 0; i<lists.length; i++){
        console.log("Name: " + lists[i].name + ", Country: " + lists[i].country)
    }
}

let lists = [
   {name: 'Remy', country: 'Korea'},
   {name: 'Chuck', country: 'China'},
   {name: 'Osmund', country: 'U.S.A.'},
   {name: 'Nicole', country: 'South Africa'},
   {name: 'Boris', country: 'France'},
   {name: 'John', country: 'Philippines'},
   {name: 'Michael', country: 'Ukraine'}
];

//testing
console.log(displayNameCountry(lists))