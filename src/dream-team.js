const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let check = 0;
  let str = "";
  let name = "";
  let arr = [];
  if (Array.isArray(members) == false) {
    return false;
  }
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] !== typeof "str") {
      check = check + 1;
    }

    if (typeof members[i] == typeof "str") {
      arr.push(members[i].trim().toUpperCase());
    }
  }
  if (members.length == check) {
    return false;
  }
  for (i = 0; i < arr.length; i++) {
    name = name + arr[i][0];
  }
  let r = name.split("").sort();
  str = r.join("");
  return str;
}

module.exports = {
  createDreamTeam,
};
