const xmasCont = (input, target) => {
  const inputArr = input.split("\n").map((element) => Number(element));
  for (let i = 0; i < inputArr.length; i++) {
    let acc = inputArr[i];
    let j = i + 1;
    while (acc <= target) {
      acc += inputArr[j];
      if (acc === target) {
        const range = inputArr.slice(i, j + 1).sort((a, b) => a - b);
        return range[0] + range[range.length - 1];
      } else {
        j++;
      }
    }
  }
};

module.exports = xmasCont;
