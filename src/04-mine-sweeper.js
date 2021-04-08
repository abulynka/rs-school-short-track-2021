/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length);
  result.fill(0);

  for (let i = 0; i < matrix.length; ++i) {
    result[i] = new Array(matrix[i].length);
    result[i].fill(0);
  }

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j]) {
        for (let ii = Math.max(i - 1, 0); ii <= Math.min(i + 1, matrix.length - 1); ++ii) {
          for (let jj = Math.max(j - 1, 0); jj <= Math.min(j + 1, matrix[ii].length - 1); ++jj) {
            if (!(ii === i && jj === j)) {
              result[ii][jj]++;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;
