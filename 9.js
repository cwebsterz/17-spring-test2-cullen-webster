// Problem 9
const R = require('ramda')

var numbers = [4,5,8,9,1,6,8,2,3,5,9,1]

function uniqueIt (arr) {
  return R.uniq(arr)
}

console.log(uniqueIt(numbers))
