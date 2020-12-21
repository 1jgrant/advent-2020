const xmas = (input, preamble) => {
  const inputArr = input.split("\n").map((element) => Number(element));
  for (i = preamble; i < inputArr.length; i++) {
    const subject = inputArr[i];
    const previous = inputArr.slice(i - preamble, i);
    const isValid = previous.some((num, index) => {
      for (j = 0; j < previous.length; j++) {
        if (num + previous[j] === subject && j !== index) {
          return true;
        }
      }
      return false;
    });
    if (!isValid) return subject;
  }
};

module.exports = xmas;
