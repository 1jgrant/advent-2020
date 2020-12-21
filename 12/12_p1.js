const nav = (input) => {
  const moves = input
    .split("\n")
    .map((element) => [element[0], Number(element.slice(1))]);
  const dirs = {
    currentDir: "E",
    N: 0,
    S: 0,
    E: 0,
    W: 0,
  };
  const comp = ["N", "E", "S", "W"];
  moves.forEach((move) => {
    if (move[0] === "F") {
      dirs[dirs.currentDir] += move[1];
    } else if (move[0] === "R") {
      const rotation = move[1] / 90;
      const newIndex = (comp.indexOf(dirs.currentDir) + rotation) % 4;
      dirs.currentDir = comp[newIndex];
    } else if (move[0] === "L") {
      const rotation = -move[1] / 90;
      let newIndex = (comp.indexOf(dirs.currentDir) + rotation) % 4;
      if (newIndex < 0) {
        newIndex = newIndex + 4;
      }
      dirs.currentDir = comp[newIndex];
    } else {
      dirs[move[0]] += move[1];
    }
  });
  return Math.abs(dirs.N - dirs.S) + Math.abs(dirs.E - dirs.W);
};

module.exports = nav;
