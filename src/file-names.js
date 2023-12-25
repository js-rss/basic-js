const { NotImplementedError } = require("../extensions/index.js");

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
  let name2 = [];
  if (names.length == 0) {
    name2 = names.slice();
    return name2;
  }

  if (names[0] !== names[1]) {
    name2 = names.slice();
    return name2;
  }

  for (let i = 1; i < names.length; i++) {
    if (names[i] == names[i - 1]) {
      name2.push(names[i - 1]);
      name2.push(names[i] + "(" + 1 + ")");
      console.log(name2);
    }
  }
  for (let i = 0; i < names.length; i++) {
    if (names[i] == names[i + 1]) {
      name2.push(names[i + 2]);
    }
  }
  for (let i = 1; i < names.length; i++) {
    let r = `${names[i].length}`;

    if (names[i + 1]) {
      console.log(names[i][r - 2]);

      if (names[i].includes(names[i + 1]) && names[i][r - 2] * 1 == 1) {
        name2.push(names[i] + "(" + 1 + ")");
        name2.push(names[i + 1] + "(" + 2 + ")");
        console.log(name2);
      }
    }
  }

  return name2;
}

module.exports = {
  renameFiles,
};
