const { reportRepair, inputString } = require("./1_report_repair");

describe("reportRepair", () => {
  test("should find three entries that sum to 2020", () => {
    reportRepair(inputString);
  });
});
