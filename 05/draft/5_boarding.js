const findHighest = (input) => {
  const arr = input.split("\n");
  let max = 0;
  arr.forEach((string) => {
    if (seatId(string) > max) max = seatId(string);
  });
  return max;
};

const binarySearch = (input, min, max) => {
  let guess = Math.floor((max - min) / 2 + min);
  if (input.length === 0) {
    return guess;
  }
  if (input[0] === "F" || input[0] === "L") {
    return binarySearch(input.slice(1), min, guess);
  }
  if (input[0] === "B" || input[0] === "R") {
    return binarySearch(input.slice(1), guess + 1, max);
  }
};

const seatId = (string) => {
  const row = binarySearch(string.slice(0, 7), 0, 127);
  const col = binarySearch(string.slice(7), 0, 7);
  return row * 8 + col;
};

// seats are from 80-919
const findMissing = (input) => {
  const arr = input.split("\n");
  const ids = arr.map((string) => seatId(string)).sort((a, b) => a - b);
  const index = ids.findIndex((id, index) => id + 1 !== ids[index + 1]);
  const missingID = index + 81;
  return missingID;
};

module.exports = { findHighest, binarySearch, seatId, findMissing };
