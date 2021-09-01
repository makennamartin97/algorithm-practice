//Here’s list of airports and a list connecting these airports, represent
// this data as a graph

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS']
]

//our graph
const airportGraph = new Map();

// defining a function to add nodes to our graph
function addNodes(airport){
    airportGraph.set(airport, [])
}
function addEdge(origin, destination){
    airportGraph.get(origin).push(destination)
    airportGraph.get(destination).push(origin)
}


//create graph
airports.forEach(addNodes)
routes.forEach(routes => addEdge(...routes))
console.log(airportGraph)