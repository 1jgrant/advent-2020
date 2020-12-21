const joltPermutations = (input) => {
  const adapters = input
    .split("\n")
    .map((element) => Number(element))
    .sort((a, b) => a - b);
  adapters.unshift(0);
  adapters.push(adapters[adapters.length - 1] + 3);
  console.log(adapters);
};

module.exports = joltPermutations;
