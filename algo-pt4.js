//sum all values in an array recursively

var arr = [2,4,6,8,10,12]

var sumRecursively = function( arr, i ){
	if ( arr.length === i ) {
		return 0
	} else { 
		// returns where we are in the array, plus a function that returns the array plus where we are in the array plus one
		return arr[i] + sumRecursively(arr, i + 1)
	}
}

// console.log(sumRecursively(arr, 0))


//count all values in a list

var countRecursively = function( arr, i ){
	if (arr.length === i) {
		return 0
	} else {
		// returns itself, which takes the same array 
		return 1 + countRecursively(arr, i + 1)
	}
}

// console.log(countRecursively(arr, 0))


//find the largest number in a list
var max = function( arr, i, tempMax ){
	if (!tempMax) {
		tempMax = arr[0]
	} 
	if ( arr.length === i) {
		return tempMax
	} else {
		if ( arr[i] > tempMax ) {
			tempMax = arr[i]
		}
		return max(arr, i + 1, tempMax)
	}
} 

// console.log(max(arr, 0))


//quicksort
var quicksort = function(arr){ 

	if ( arr.length === 0 ) {
		return [];
	}
	
	var less = []
	var greater = []

	var pivot = arr[0];

	for ( var i = 1; i < arr.length; i++ ) {
		if ( arr[i] < pivot ) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);

		}
	}
	
	return quicksort(less).concat( pivot, quicksort(greater) )
}

console.log(quicksort(arr))