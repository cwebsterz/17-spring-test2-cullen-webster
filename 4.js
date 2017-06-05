// Problem 4

var faveQuote = 'Do the best you can until you know better. Then, when you know better, do better'

function stringParameterize (item) {
  return item.toLowerCase().split(' ').join('-');
}

console.log(stringParameterize(faveQuote))
