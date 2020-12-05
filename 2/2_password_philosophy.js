const passwordPhilosophy = (inputString) => {
  const entries = inputString.split("\n");
  let counter = 0;
  entries.forEach((entry) => {
    const password = entry.match(/(\w+)$/g)[0];
    const re = /(\d+)-(\d+) (\D)(?=:)(: .+)$/g;
    const regexStr = entry.replace(re, "^([^$3]*$3[^$3]*){$1,$2}$");
    const valRegex = new RegExp(regexStr, "g");
    if (valRegex.test(password) === true) {
      counter++;
    }
  });
  return counter;
};

const corpAuth = (inputString) => {
  const entries = inputString.split("\n");
  let counter = 0;
  entries.forEach((entry) => {
    const password = entry.match(/(\w+)$/g)[0];
    const re = /(\d+)-(\d+) (\D)(?=:)(: .+)$/g;
    const i1 = Number(entry.replace(re, "$1")) - 1;
    const i2 = Number(entry.replace(re, "$2")) - 1;
    const char = entry.replace(re, "$3");
    if (password[i1] === char && password[i2] !== char) {
      counter++;
    } else if (password[i2] === char && password[i1] !== char) {
      counter++;
    }
  });
  return counter;
};

module.exports = { passwordPhilosophy, corpAuth };
