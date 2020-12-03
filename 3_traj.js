//to reach the bottom, need 3x as many cols as rows
const traverse = (input, x, y) => {
  let trees = 0;
  const rows = input.split("\n");
  const height = rows.length;
  const width = rows[0].length;
  //console.log("width>>>", width);
  //console.log("height>>>", height);
  //console.log("rows>>>", rows);

  let col = 0;
  for (let row = 0; row < height; row += y) {
    if (rows[row][col] === "#") trees++;
    col = col + x < width ? col + x : col + x - width;
  }
  //console.log(trees);
  return trees;
};

const multiTraverse = (input = {});

module.exports = { traverse };
