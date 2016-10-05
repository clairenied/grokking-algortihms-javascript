var llamaList = [0,1,2,3,4,5,6,7,8,9]



var binarySearch = function (list, item) {
  var low = 0
  
  var high = list.length - 1 

  while (low <= high) { 
    var mid = Math.round(((low + high)/2))

    var guess = list[mid] 

    if (guess === item) {
      return mid
    }
    else if (guess > item) {
      high = mid - 1
    }
    else if (guess < item) {
      low = mid + 1 
    }
    else {
      return null
    }
  }   
}

console.log(binarySearch(llamaList, 1))


var listLengthCalc = ( 128 )

var binarySearchNumber = function (listLength) {
  return Math.log2(listLength)
}

console.log(binarySearchNumber(listLengthCalc))