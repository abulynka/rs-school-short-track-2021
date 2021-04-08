/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const tmp = new Map();
  names.forEach(
    (value) => {
      if (tmp.has(value)) {
        const pushValue = `${value}(${tmp.get(value)})`;
        result.push(pushValue);
        tmp.set(value, tmp.get(value) + 1);
        if (tmp.has(pushValue)) {
          tmp.set(pushValue, tmp.get(pushValue) + 1);
        } else {
          tmp.set(pushValue, 1);
        }
      } else {
        result.push(value);
        tmp.set(value, 1);
      }
    },
  );
  return result;
}

module.exports = renameFiles;
