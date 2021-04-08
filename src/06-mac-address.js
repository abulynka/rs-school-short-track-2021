/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const digits = inputString.split('-');
  if (digits.length !== 6) {
    return false;
  }
  for (let i = 0; i < digits.length; ++i) {
    let digit = parseInt(digits[i], 16).toString(16);
    if (digit.length === 1) {
      digit = `0${digit}`;
    }
    if (digit.toLowerCase() !== digits[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

module.exports = isMAC48Address;
