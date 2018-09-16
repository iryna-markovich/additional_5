module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
        if (brackets[brackets.length - 1] !== str[i]) {
          brackets.push(str[i]);
        } else {
          brackets.pop(str[i]);
        }
      } else {
        if (str[i] === bracketsConfig[j][0]) {
          brackets.push(str[i]);
        } else if (str[i] === bracketsConfig[j][1]) {
          if (brackets.length === 0) {
            return false;
          }
          if (brackets[brackets.length - 1] !== bracketsConfig[j][0]) {
            return false;
          } else {
            brackets.pop(str[i]);
          }
        }
      }
    }
  }
  if (brackets.length === 0) {
    return true;
  } else {
    return false;
  }
}