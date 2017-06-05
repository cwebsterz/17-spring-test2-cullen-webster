// Problem 7
const R = require('ramda')


var numbers = ['hi','hello','yo','ay','howdy']

function firstOne (n, arr) {
  return R.take(n, arr)
}

console.log(firstOne(1, numbers))
