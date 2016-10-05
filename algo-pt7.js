var graph = {
	start : { a : 6, b : 2 },
	a : { fin : 1 },
	b : { a : 3, fin : 5},
	fin : {}
}

var costs = { 
	a : 6,
	b : 2,
	fin : Infinity
}

var parents = {
	a : "start",
	b : "start",
	fin : null
}

var processed = []


function findLowestCostNode(costs){
	var lowestCost = Infinity
	var lowestCostNode = null

	for ( var node in costs ){
		var cost = costs[node]
		
		if ( cost < lowestCost && ( processed.indexOf(node) === -1 ) ){
			lowestCost = cost 
			lowestCostNode = node
		}
	}
	return lowestCostNode
}

var node = findLowestCostNode(costs)

while( node !== null ){
	var cost = costs[node]
	var neighbors = graph[node]

	Object.keys(neighbors).forEach(function(n){
		var newCost = cost + neighbors[n]
		
		if ( costs[n] > newCost ){
			costs[n] = newCost
			parents[n] = node
		} 
	})
	processed = processed.concat(node)
	node = findLowestCostNode(costs)
} 


console.log(costs)