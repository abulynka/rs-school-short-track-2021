/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const line = new Array(matrix[0].length).fill(true);
  let sum = 0;

  matrix.forEach(
    (value) => {
      value.forEach(
        (number, index) => {
          if (line[index] === false) {
            return;
          }
          if (number === 0) {
            line[index] = false;
            return;
          }
          sum += number;
        },
      );
    },
  );
  return sum;
}

module.exports = getMatrixElementsSum;
