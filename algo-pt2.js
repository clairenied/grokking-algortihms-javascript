//loop through an array
//find the smallest value in the array
//push the smallest value in the array to a new array
//delete the smallest value from the old array

var oldArray = [5,4,6,2,10]

var getSmallestIndex = function(oldArray){
	var smallest = oldArray[0]
	var smallestIndex = 0

	for ( var i = 0; i < oldArray.length; i++ )
		if ( oldArray[i] < oldArray[0] ){
			smallest = oldArray[i]
			smallestIndex = i
		}

	return smallestIndex
}

var selectionSort = function(oldArray){
	var newArray = []

	while (oldArray.length){
		var smallest = getSmallestIndex(oldArray)
		console.log(smallest);
		newArray.push(oldArray[smallest])
		oldArray.splice(smallest,1)
	}
	return newArray
}

console.log("smallestIndex: ", getSmallestIndex(oldArray))
console.log("selectionSort: ", selectionSort(oldArray))