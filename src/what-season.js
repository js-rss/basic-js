const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   if (arguments.length === 0) return 'Unable to determine the time of year!'
 if (typeof date !== 'object' || Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!')
 //let day = date.getDate();
//let dateNow = newDate(year,month,day)
//if(date.getFullYear !==0){throw new Error('Invalid date!')}
//if(!getMonth()){throw new Error('Invalid date!')}
if(date.length === 0 || date == undefined){return 'Unable to determine the time of year!'}
let year = date.getFullYear();
let month = date.getMonth();
//if (year<1970){throw new Error('Invalid date!')}
if(month == 11 || month <=1){return 'winter'}
if(month >=2 && month <=4){return 'spring'}
if(month >=5 && month <=7){return 'summer'}
if(month >=8 && month <=10){return 'autumn'}
}

module.exports = {
  getSeason
};
