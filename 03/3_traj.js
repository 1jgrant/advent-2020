//to reach the bottom, need 3x as many cols as rows
const traverse = (input, x, y) => {
  let trees = 0;
  const rows = input.split("\n");
  const height = rows.length;
  const width = rows[0].length;

  let col = 0;
  for (let row = 0; row < height; row += y) {
    if (rows[row][col] === "#") trees++;
    col = col + x < width ? col + x : col + x - width;
  }
  return trees;
};

const multiTraverse = (input) => {
  const moves = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  const trees = moves.map((move) => traverse(input, move[0], move[1]));
  const sum = trees.reduce((acc, currentVal) => acc * currentVal);
  return sum;
};

module.exports = { traverse, multiTraverse };
