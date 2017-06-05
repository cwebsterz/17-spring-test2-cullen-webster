// Problem 11
const R = require('ramda')

var student = {
    name : "David Ray",
    sclass : "VI",
    rollno : 12 }

function keyedUp (arr) {
  return R.keys(arr)
}

console.log(keyedUp(student))
