const { traverse, multiTraverse } = require("../3_traj");

const inputExample = `..##.........##.........##.........##.........##.........##.......
#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........#.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...##....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#`;

const unit = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const input = `.#..............##....#.#.####.
##..........#.....##...........
.......#....##...........#.#...
.........#.#...#..........#....
.........#..#................##
..#...#..#..#...........#......
...................#...##..##..
........#.....##...#.#.#...#...
#..#.##......#.#..#..........#.
......#.#...#.#...#........##.#
.....#.####........#...........
...###..#............#.........
.....#.......##......#...#.....
#......##......................
......#..............#.........
..##...#....###.##.............
#...#..........#.#.........#...
...........#........#...#......
.....##.........#......#..#....
#..............#....#.....#....
.#......#....#...#............#
.####..........##..#.#.........
....#...#......................
....................#....#.#...
..........###.#...............#
.#...........#...##............
.#.#..#.....#...#....#.......#.
.##........#..#....#...........
.........#.....#......###......
..............#..#.......#.....
........#..#.#...........#..#..
#.........#......#.....##.#.#..
........#.#.#....#.............
........#........#.#.##........
#......#.#..........#..#.......
..#....#...##......###..#..#...
............#..#.#.........#...
....#.#...........#..........##
.......#.#.#..#......#...#.....
..#.........##.#.........#...#.
......#....#.#....#........#.#.
.#....###....#..............#..
.#....#.......#....#..#.....#..
.....#.....#...................
..#.....#......#......#........
......##.##...#...#...#...#.##.
##...#....#...#..#...#...#.....
..#.....#...#...##.##...#......
.....#.............##...#......
.....................#.##..#...
#...#....#....#........#.....#.
..#...#.........#...#..#.....#.
#.#......#...................#.
..#...........##...............
..#....#........#..#...........
...........#...................
.............###......#....#...
...........#...#....#..#....#..
.....##............#.#.......#.
.....#..#....#...#....#........
...............##........#.#...
.........#...#.#....#.......#..
#..#.......#.......#...#.......
..#...........................#
......#.......#..#......#......
.#.......#..................##.
..#.........#..#.##.#....#...##
...#..#....#...#....#.#........
.#...#........##..#..#.......#.
.....#........#....#....#..#...
............#...........#......
..###.......#..#....#......#...
.....#...#.......#..#..........
..#........##.#....##..........
#....#.............#..##......#
....#.................##.......
...#.......#........#....##.#.#
##..##..#.....#.....#..........
...#...............#....#..#...
.#...##....#....#.....#....##..
...#.....#......#......#.......
#.....#.......##.....#..#....##
.....#.#...##.#......##....#.#.
..........#....#.#...#.........
.#..##...#.....................
...........##..#...#....#......
...#......#........#.......#...
.#......#..#........#.....#..#.
.......#........##..#.##....#..
.##..........#..#...#.....#....
.....##...............#.#......
..##.....#..#......#..##.#.#...
....#......#.##...........#....
#.#..#.......#......#.#........
...#.#..#....#............#..#.
...#..........###....#....#...#
........##...#.......#..#....#.
..#...#.....#..#........##.....
...#..#.##.#.#.##..............
.......#...#.........#.....#..#
..#.....#.#..........#..#......
......#..........#......#.....#
.#...........#........#......##
..##............#......#...#..#
#..................#...........
#....#..#.........#........#..#
..#.#....###..#...#...##...##..
...#....#..#.....#.............
.#........##.##...#....#...#...
.........#.......##.#.....##...
#.#.....##...#........#...#...#
.....#.#.##...#.....#.##..#....
........#...##...#...#.#..#..#.
.##....#.##...#.......#........
...#..#................#..#....
....#.......#......#...#.##....
#......###..#...#......#.......
..#...#...##...........##......
.......#...#..##....##......#..
....#.#.............#.#...##..#
..........#........#...#......#
............#.#.#....###.......
#..#...#.#.####...#..#...#.....
.##.......#.##...#.............
#..#...........#.#.##.......#..
...#..#.#...#...###..#.#..#.#..
..#...#.....#..#....#....#.....
.........##.......#............
.........##.##......###........
.............#.#....#..#.....#.
...#....#.#.......#......##....
............#..................
....##...#..........#...#..#...
#..#....#.....#.......#.##.#..#
.....#.........##.............#
#.....#.#...#............##..##
..............#....#.....#.....
.#....###..#.#.....###.#..#....
.....#....##...#....#......#...
..........#...#....#...........
............#....#..#.........#
..##.....#.#...#.......#...#...
...#...#..#......##...#.....##.
......#.##............##.#....#
....#......#...##.....#.....###
.#.###...............#...#.#...
..#....................##...#..
.......#.....##...........#....
#.........#....#....#....#....#
..#.#..##.#.#..................
.....#.......#................#
...........#.......#........#..
#...#.........#.#.....#.....#..
..........#..#...........#.....
#..#.##..##..#.#.##.........#..
#..#..#....##..#.........#.....
#.#.......................#.#..
.##......#.#...#......#....#...
..#.#................#..##.....
.......#..................#...#
.....#.........##.#....#.......
#..........#..#.#..........#..#
..#..#.....#.........#...#.....
..............#.....#..#...#.##
...............................
...#............##......#.....#
.......#..#.............#.#....
...........#..........#........
...#.####..#......#...#....#...
##......#.##.....#.............
....#.........#...#...........#
...#........#.......#.#..#.#.#.
..#.......#.........#....#.....
................#.#.#.##...#..#
#.##...#...#..#.....#.....#..#.
...............#...........#...
.....##.#...............##...#.
.#..##.##......................
.......#.........#..#..#.......
...#......#..................#.
...#.#..#....#....#............
...........#...#..#....##......
.....#...#..#.#....#....#....#.
.......#...#...#.#.#...........
....#......#......#...##..#....
##...#.#.....#..#.##...........
#.#..#.....#..#................
...#..#.#......#.#...........##
##....#...#.....###..#...#....#
...#.....#.#.#......##...#...#.
............#.......#..........
....#..........###.......#.....
.................##..##....#...
...........#........##..#......
...#.#...#.....#........#...#..
#...#.#......#.#...........#...
..#..........#....#..........#.
..#................#...........
#...#.#....#.#.......#.........
.#...........##..#....#....#..#
.##........#.....#...#..#....#.
......#......#...#.............
.......#..#...#.##....#..#.#...
.......#......#....#....#.#.#..
..........##.....#....##.#.....
.........##..#...#.....#..#....
...#....#..........#..#...#..#.
.......#.....##.#..#.....#...#.
#...#......#......#...#........
#..#....#.#......#......#......
.......#.##....................
...##...#.....#......##......#.
.#...................###.......
....#........###...#........#..
...#............#.....#..#.....
..................#......#....#
..##......#..##..##......#.#...
........##....##.......#...#...
.#.#....#.....#.....#....#....#
...##.#.............#....##....
.........#.....#...#......#....
..#.....#............#....##...
..##.....#.....##.##...........
#....#.#.......#..#......#.....
##.......#.....#.....####....#.
##...#.......#...#.....#.......
#.....#..##.##...##..#.....#..#
..........#......#..#.#........
..##.#......#..............#...
.#...#..........#.......#....#.
..#....##...#...........#....#.
..#.........#..#......#......#.
.##....#......#.#.........#..##
.......#...#....##............#
.##.................#.#........
...#.#...#..#..#.....#.#.......
.#.#.......#...................
..#..#.....#......#.....##..##.
.#........#.##......#..........
....##...#............#.#....#.
.......#.#..#....##.#....#....#
......####...#..#.....#........
..........#..#.........#.#..#.#
..........##.........#.##......
.##..#.#.....#.....#....#......
............#..#...............
.....##.........#...#...##...##
........#.##.#...#.....#....#.#
#......##.#.##..........##.....
#..#..#........#.........#..#..
...............#.#..##.........
.#.......##.#..#....#...#....##
.#..##.....##......#....#...#.#
........#...#.........#.....#.#
...........#............#...#..
................#...........#..
..............##........#....#.
..........#.....##.....#..#....
#......#....###..#..#..........
.....#.#.....##....#.#.......#.
...#...#...............#.#.....
.............#.......#.........
.....#.....#..#......#.....#...
.........#.................#.##
.#.....#.##..#.................
..#......#.......#.....#...#..#
..#..#.#.#...#.......#.##......
..........#..#.........#.......
.#..........#...#....#..#...##.
.#.#.#.###.....#...#.#.#.......
....##............#............
.#.#.............#..#......#.#.
.#.#..........##..#.....#..#.#.
...........#.##..#...#.#.....#.
...........#..#....#...........
..#................#.#...#....#
...............##........##....
....#.............#........#...
...#......#.#.#........#.......
#..............#..##.#..##.....
.#.#.###................##.....
.............#..#.........#....
.......##..#............#...#..
...#...#...........#.....#.....
........#......#.#.#......#..#.
#.##.......#......#..#..#.#....
...#........#...........#...#..
..#...........#.........#......
.............#....#....#.......
....#.........#........#......#
..#............##..#.........#.
.#...#...#..#...#........#..#..
...#....##..............#......
...........#...#....#.#.##..###
..#....#......#.........#..#...
.......#...#...................
.#...#.#...................#...
.#.....##.#.......#.#.#...##..#
.....#..#.#.........#...#..##..
.#..#.##.#......#......#.#...#.
......#..#....##..#....##....##
#...#......##........##........
.#.........###................#
.................#..###..#.#...
..#.#........#..#........#...#.
#.#....#....#..#...#.#......#..
.#.#.............###.........#.
.....#...............##...#...#
..............#...#........#..#
...................#..#.......#
#......................#.....#.
...#.........#..##...#...#.##..
.....#..........#.........#....
.....#...#............#..#.....
.............#............#....
...#.........#.................
#...........#.#...............#
.....#...#.....#..#.##.......##
...#....#.#...........#........
.........................#.#...
.#..#...........#.#........#...
.............#.#.....#..#....#.
.....#...#.###...#..#........#.`;

describe("traverse", () => {
  test("should return the correct number of trees from the test data", () => {
    expect(traverse(inputExample, 3, 1)).toBe(7);
  });

  it("should return the correct number of trees when supplied with the smallest repeatable unit", () => {
    expect(traverse(unit, 3, 1)).toBe(7);
  });

  test("should return the correct number of trees from actual data", () => {
    expect(traverse(input, 3, 1)).toBe(193);
  });
});

describe("multTraverse", () => {
  test("should return the correct sum of trees from the test data", () => {
    expect(multiTraverse(unit)).toBe(336);
  });
  it("should return the correct sum of the actual data", () => {
    expect(multiTraverse(input)).toBe(1355323200);
  });
});
