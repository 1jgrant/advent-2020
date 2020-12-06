const customsP1 = (input) => {
  const groups = input.split("\n\n").map((group) => group.replace(/\n/g, ""));
  const unique = groups.map((group) => {
    const chars = [];
    for (let i = 0; i < group.length; i++) {
      if (!chars.includes(group[i])) chars.push(group[i]);
    }
    return chars.length;
  });
  return unique.reduce((acc, val) => acc + val);
};

module.exports = { customsP1 };
