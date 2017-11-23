function iterativeLog(array) {
  array.forEach(function(element, index){console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var arr = ['cat', 'dog', 'rabbit', 'horse']
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
