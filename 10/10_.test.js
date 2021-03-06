const jolts = require("./10_p1");
const joltPermutations = require("./10_p2");

const smallTestData = `16
10
15
5
1
11
7
19
6
12
4`;

const testData = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const data = `18
47
144
147
124
45
81
56
16
59
97
83
75
150
33
165
30
159
84
141
104
25
164
90
92
88
2
8
51
24
153
63
27
123
127
58
108
52
38
15
149
66
72
21
46
89
135
55
34
37
78
65
134
148
76
138
103
162
114
109
42
77
102
163
7
105
69
39
91
111
131
130
6
137
96
82
64
3
95
136
85
9
116
17
99
12
117
62
50
110
26
115
71
57
156
120
98
1
70`;

describe("Day 10 P1", () => {
  test("should find the result of 1 jolt differences multiplied by 3 jolt differences", () => {
    expect(jolts(testData)).toBe(220);
  });
  test("should find the result with the puzzle input", () => {
    expect(jolts(data)).toBe(2244);
  });
});

// describe("Day 10 P2", () => {
//   test("should find the number of valid permutations for the small test data", () => {
//     expect(joltPermutations(smallTestData)).toBe(8);
//   });
// });
