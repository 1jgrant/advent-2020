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

module.exports = { passwordPhilosophy };
