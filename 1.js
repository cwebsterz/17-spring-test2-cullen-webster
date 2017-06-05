//Problem #1
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

function reverseIt(arr) {
  return R.reverse(arr)
}

console.log(reverseIt(colors))
