const nav2 = (input) => {
  const actions = input
    .split("\n")
    .map((element) => [element[0], Number(element.slice(1))]);
  const directions = {
    N: 0,
    S: 0,
    E: 0,
    W: 0,
  };
  const waypoint = {
    N: 1,
    E: 10,
    S: 0,
    W: 0,
  };
  const comp = ["N", "E", "S", "W"];

  actions.forEach((action) => {
    const order = ["N", "E", "S", "W"];
    if (action[0] === "F") {
      Object.keys(directions).forEach((direction) => {
        directions[direction] += waypoint[direction] * action[1];
      });
    } else if (action[0] === "R" || action[0] === "L") {
      const shift =
        action[0] === "R" ? (action[1] / 90) % 4 : -(action[1] / 90) % 4;
      const toMove = shift > 0 ? order.splice(0, shift) : order.splice(shift);
      const newOrder = [];
      if (shift > 0) {
        newOrder.splice(0, 0, order.concat(toMove));
      } else {
        newOrder.splice(0, 0, toMove.concat(order));
      }
      const values = Object.values(waypoint);
      for (let i = 0; i < newOrder[0].length; i++) {
        waypoint[newOrder[0][i]] = values[i];
      }
    } else {
      waypoint[action[0]] += action[1];
    }
  });
  return (
    Math.abs(directions.N - directions.S) +
    Math.abs(directions.E - directions.W)
  );
};

module.exports = nav2;
