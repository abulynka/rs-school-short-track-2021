/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  let char = str.charAt();
  let result = '';
  str.split('').forEach(
    (value) => {
      if (char === value) {
        ++counter;
      } else {
        if (counter === 1) {
          result += char;
        } else {
          result += counter + char;
        }
        char = value;
        counter = 1;
      }
    },
  );
  if (counter === 1) {
    result += char;
  } else if (counter > 1) {
    result += counter + char;
  }
  return result;
}

module.exports = encodeLine;
