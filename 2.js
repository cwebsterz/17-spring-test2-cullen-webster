// Problem #2
const R = require('ramda')

const colors = [
  'black',
  'green',
  'blue',
  'navy',
  'orange',
  'gold',
  'purple'
]


function upper(arr){
  return R.toUpper(arr)
}

function upperArray (arr) {
  return arr.map(upper)
}

console.log(upperArray(colors))
