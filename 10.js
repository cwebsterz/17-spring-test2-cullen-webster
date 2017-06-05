// Problem 10
const R = require('ramda')

var numbers = [1,2,3,4,5]
var moreNumbers = [6,7,8,9,10]

function unionIt (arr, arr2) {
  return R.union(arr, arr2)
}

console.log(unionIt(numbers, moreNumbers))
