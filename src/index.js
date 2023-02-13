
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  let str = matrix.length
  for (let i = 0; i < str; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let column = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1)
          arr.push(matrix[i][column])
  return arr;
}
  }
}