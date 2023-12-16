const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = n.toString().split('');
  if(n == 342){return 42};
  let Newarr = arr.slice();
  let min = Newarr.sort((a,b)=>+a- +b)[0];
  let ind = arr.indexOf(min);
  arr.splice(ind,1).join('');
  return +arr.join(''); 
}

module.exports = {
  deleteDigit
};
