function iterativeLog(array) {
  array.forEach(function(index, element){console.log(`${index}:${element}`)})
}

function iterate(callback) {
  var arr = [cat, dog, rabbit, horse]
  arr.forEach(callback(arr))
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely)

console.log(animals)
