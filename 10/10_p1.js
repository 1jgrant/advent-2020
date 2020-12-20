const jolts = (input) => {
  const adapters = input
    .split("\n")
    .map((element) => Number(element))
    .sort((a, b) => a - b);
  adapters.unshift(0);
  const diffs = {
    1: 0,
    2: 0,
    3: 1,
  };
  for (let i = 1; i < adapters.length; i++) {
    diffs[(adapters[i] - adapters[i - 1]).toString()]++;
  }
  return diffs["1"] * diffs["3"];
};

module.exports = jolts;
