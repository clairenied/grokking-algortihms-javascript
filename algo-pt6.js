var graph = {}

graph.you = ["alice", "bob", "claire"]
graph.bob = ["anuj", "peggy"]
graph.alice = ["peggy"]
graph.claire = ["thom", "johnny"]
graph.anuj = []
graph.peggy = []
graph.thom = []
graph.johnny = []

//implementing the algorithm
//1. keep a queue containing the people to check
//2. pop a person off the queue 
//3. check if this person is a mango seller
//4a. if yes, you're done! 
//4b. else, add all neighbors to the queue 
//5. loop
//6. if the queue is empty, there are no mango sellers in the network


var personIsSeller = function(person){
	return person[person.length-1] === "m"
}


var breadthFirst = function(graph) {
	// console.log(graph)
	var queue = ["you"]
	var visited = ["you"]
	while (queue.length){
		var node = queue.shift();
		
		for ( var i = 0; i < graph[node].length; i++ ) {
			if ( !visited.includes(graph[node][i]) ) {
				queue.push(graph[node][i])
				visited.push(graph[node][i])
			}
		}
		// same as
		// queue.push(...graph[node]);

		if ( personIsSeller(node) ) {
			return node
		} 
	}
	return false
}

console.log(breadthFirst(graph))