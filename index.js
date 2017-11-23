function iterativeLog(array) {
  array.forEach(function(index, element){console.log(`${index}:${element}`)})
}

function iterate(callback) {
  var arr = ['cat', 'dog', 'rabbit', 'horse']
  arr.forEach(callback(arr))
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
