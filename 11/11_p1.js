/* 
Now, you just need to model the people who will be arriving shortly. 
Fortunately, people are entirely predictable and always follow a simple 
set of rules. All decisions are based on the number of occupied seats 
adjacent to a given seat (one of the eight positions 
immediately up, down, left, right, or diagonal from the seat). 
The following rules are applied to every seat simultaneously:

If a seat is empty (L) and there are no occupied seats adjacent to it, 
the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are 
also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.

Floor (.) never changes; seats don't move, and nobody sits on the floor.
*/

const seating = (input) => {
  const arrays = input.split("\n").map((array) => array.split(""));

  const update = (inputArrs) => {
    const updated = inputArrs.map((row, rowIndex) => {
      return row.map((seat, colIndex) => {
        const adjacent = [];
        if (rowIndex < 1) {
          next = [
            row[colIndex - 1],
            row[colIndex + 1],
            inputArrs[rowIndex + 1][colIndex - 1],
            inputArrs[rowIndex + 1][colIndex],
            inputArrs[rowIndex + 1][colIndex + 1],
          ];
          adjacent.splice(0, 0, ...next);
        } else if (rowIndex === inputArrs.length - 1) {
          const next = [
            inputArrs[rowIndex - 1][colIndex - 1],
            inputArrs[rowIndex - 1][colIndex],
            inputArrs[rowIndex - 1][colIndex + 1],
            row[colIndex - 1],
            row[colIndex + 1],
          ];
          adjacent.splice(0, 0, ...next);
        } else {
          const next = [
            inputArrs[rowIndex - 1][colIndex - 1],
            inputArrs[rowIndex - 1][colIndex],
            inputArrs[rowIndex - 1][colIndex + 1],
            row[colIndex - 1],
            row[colIndex + 1],
            inputArrs[rowIndex + 1][colIndex - 1],
            inputArrs[rowIndex + 1][colIndex],
            inputArrs[rowIndex + 1][colIndex + 1],
          ];
          adjacent.splice(0, 0, ...next);
        }

        if (seat === ".") {
          return ".";
        } else if (seat === "L") {
          return adjacent.some((seat) => seat === "#") ? "L" : "#";
        } else if (seat === "#") {
          let count = 0;
          for (const seat of adjacent) {
            if (seat === "#") count++;
          }
          return count > 3 ? "L" : "#";
        }
      });
    });
    const updatedStr = updated.map((arr) => arr.join("")).join("");
    const inputStr = inputArrs.map((arr) => arr.join("")).join("");
    if (updatedStr === inputStr) {
      //   console.log(updated);
      return updatedStr;
    } else {
      return update(updated);
    }
  };
  const final = update(arrays).split("");
  //console.log(final);
  const occupied = final.filter((seat) => seat === "#").length;
  //console.log(occupied);
  return occupied;
};

module.exports = seating;
