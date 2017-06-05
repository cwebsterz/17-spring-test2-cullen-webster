// Problem 8
const R = require('ramda')

var numbers = [4,6,8,2,3,5,9,1]

function sortIt (a, b) {
  return a - b
}

console.log(R.sort(sortIt, numbers))
