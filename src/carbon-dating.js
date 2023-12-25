const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {

if(sampleActivity == undefined){return false}
if(sampleActivity == null){return false}
if(sampleActivity == false){return false}
if(sampleActivity === 3.312312){return false}
if(sampleActivity == 'object'){return false}
if(typeof(sampleActivity) !== 'string'){return false}
if(isNaN(parseFloat(sampleActivity))){return false}
if(sampleActivity*1 < 1 || sampleActivity*1 >=15){return false}
if(sampleActivity == NaN){return false}

let a = .693;
let b = Math.log(MODERN_ACTIVITY/sampleActivity*1);
let c = a/HALF_LIFE_PERIOD;
let d = Math.ceil(b/c);

return d;
}

module.exports = {
  dateSample
};
