const { NotImplementedError } = require('../extensions/index.js');

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
    let arr = str.split('');
    let brr =[]
    let b = 0;
    for(let i = 0;i<str.length;i++){
      if(arr[i]==arr[i+1]){
        b += 1
      }
      else{
        brr.push(b+1)
        brr.push(arr[i])
        b=0;
      }
    }
    console.log(brr,'brr')
    let clear = []
    for(let i = 0;i<brr.length;i++){
      if(brr[i]==1){
       clear = brr.splice(i,1)
      }
    }
  return brr.join('');
}

module.exports = {
  encodeLine
};
