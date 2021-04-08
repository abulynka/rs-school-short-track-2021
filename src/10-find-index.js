/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let min = 0;
  let max = array.length - 1;
  let mid = Math.floor((max - min) / 2);
  let counter = array.length;
  while (--counter > 0) {
    const currentValue = array[mid];
    if (currentValue === value) {
      return mid;
    }
    if (mid === max) {
      if (array[min] === value) {
        return min;
      }
      return -1;
    }
    if (mid === min) {
      if (array[max] === value) {
        return max;
      }
      return -1;
    }
    if (currentValue < value) {
      min = mid;
      mid = Math.ceil((max - mid) / 2) + mid;
    } else {
      max = mid;
      mid = Math.ceil((mid - min) / 2) + min;
    }
  }
  return -1;
}

module.exports = findIndex;
