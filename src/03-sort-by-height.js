/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const pattern = new Set();
  const sortable = [];
  arr.forEach(
    (value, index) => {
      if (value === -1) {
        pattern.add(index);
      } else {
        sortable.push(value);
      }
    },
  );
  sortable.sort((a, b) => a - b);

  const result = [];
  let index = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (pattern.has(i)) {
      result.push(-1);
    } else {
      result.push(sortable[index++]);
    }
  }

  return result;
}

module.exports = sortByHeight;
