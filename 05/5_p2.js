const findSeat = (input) => {
  const codes = input.split("\n");
  const seatIds = codes
    .map((seat) => {
      const positionStrings = [seat.slice(0, 7), seat.slice(7)];
      const [row, col] = positionStrings.map((pos) => {
        const binary = pos.replace(/\w/g, (match) => {
          if (match === "R" || match === "B") return "1";
          return "0";
        });
        return parseInt(binary, "2");
      });
      return row * 8 + col;
    })
    .sort((a, b) => a - b);

  const missingIndex = seatIds.findIndex(
    (id, index) => id + 1 !== seatIds[index + 1]
  );
  const missingID = missingIndex + seatIds[0] + 1;
  return missingID;
};

module.exports = { findSeat };
