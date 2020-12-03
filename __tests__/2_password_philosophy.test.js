const { passwordPhilosophy } = require("../2_password_philosophy");

describe("passwordPhilosophy", () => {
  test("should identify if a single password is valid or not", () => {
    const input = ["8-11 l: qllllqllklhlvtl"];
    expect(passwordPhilosophy(input)).toBe(1);
    const input2 = ["2-5 l: qllllqllklhlvtl"];
    expect(passwordPhilosophy(input2)).toBe(0);
  });
  test("should identify if a multiple passwords are valid or not", () => {
    const input = ["8-11 l: qllllqllklhlvtl", "2-5 l: qllllqllklhlvtl"];
    expect(passwordPhilosophy(input)).toBe(1);
  });
});
