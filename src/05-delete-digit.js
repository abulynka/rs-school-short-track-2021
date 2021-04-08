/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return parseInt(
    n.toString(10).split('').reduce(
      (acc, value, index) => {
        const arr = n.toString(10).split('');
        arr.splice(index, 1);
        const number = parseInt(arr.join(''), 10);
        if (number > parseInt(acc, 10)) {
          return number.toString(10);
        }
        return acc;
      },
      0,
    ), 10,
  );
}

module.exports = deleteDigit;
