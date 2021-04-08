/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const getUnique = function (s) {
    const result = new Map();
    s.split('').forEach(
      (value) => {
        let number = result.get(value);
        if (!number) {
          number = 0;
        }
        result.set(value, ++number);
      },
    );
    return result;
  };

  const s1Result = getUnique(s1);
  const s2Result = getUnique(s2);
  let result = 0;

  s1Result.forEach(
    (value, key) => {
      if (s2Result.has(key)) {
        result += Math.min(value, s2Result.get(key));
      }
    },
  );

  return result;
}

module.exports = getCommonCharacterCount;
