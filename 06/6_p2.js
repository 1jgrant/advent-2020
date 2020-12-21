const customsP2 = (input) => {
  const joinedGroups = input
    .split("\n\n")
    .map((group) => group.replace(/\n/g, ""));
  const unique = joinedGroups.map((group) => {
    const chars = [];
    for (let i = 0; i < group.length; i++) {
      if (!chars.includes(group[i])) chars.push(group[i]);
    }
    return chars;
  });
  const groups = input.split("\n\n").map((group) => group.split("\n"));
  const everyone = unique.map((charSet, index) => {
    let counter = 0;
    charSet.forEach((char) => {
      if (groups[index].every((person) => person.includes(char))) {
        counter++;
      }
    });
    return counter;
  });
  return everyone.reduce((acc, val) => acc + val);
};

module.exports = { customsP2 };
