const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
   
  const brr = arr.slice()
    const dbn = '--double-next';
    const dbp = '--double-prev';
    const disp = '--discard-prev';
    const disn = '--discard-next';
  let res = [];
  
  for(let i = 0;i<brr.length;i++){
    if(brr[i]== dbn){
       brr[i] = brr[i+1]
     }
    
    if(brr[i]== dbp){
      brr[i] = brr[i-1]
   }
   if(brr[i]== disp){
    brr[i-1] = undefined
    brr[i]=undefined
  }
  if(brr[i]== disn){
    brr[i+1] = undefined
    brr[i]=undefined
  }
}
  for(let i = 0;i<brr.length;i++){
  if(brr[i]!==undefined){
    res.push(brr[i])
    }
  }
 
   return arr;
  }

module.exports = {
  transform
};
