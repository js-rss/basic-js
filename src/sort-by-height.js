const { NotImplementedError } = require('../extensions/index.js');

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
  let a = arr.slice();
  let b = [];
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      b.push(a[i]);
    }
  }
  let arrsort = b.sort();
  for (let i = 0; i < a.length; i++) {
    if (arr[i] == -1) {
      arrsort.splice(i, 0, -1);//c итого удаляя 0 элементов вставить "-1"
    }
  }
  arr = arrsort.slice();
  return arr;
}

module.exports = {
  sortByHeight
};
