
exports.min = function min (array) {
  if(!array || array.length === 0) {
    return 0
  } else {
    const newArr = array.sort((a, b) => a - b)
    return newArr[0];
  }
}

exports.max = function max (array) {
  if(!array || array.length === 0) {
    return 0
  } else {
    const newArr = array.sort((a, b) => a - b)
    return newArr[newArr.length - 1];
  }

}

exports.avg = function avg (array) {
  if(!array || array.length === 0) {
    return 0
  } else {
    let sum = array.reduce((acc, val) => acc + val, 0)
    return sum / array.length;
  }
}
