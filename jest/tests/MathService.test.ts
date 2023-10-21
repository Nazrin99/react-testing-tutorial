import exp from "constants";
import { factorial } from "../../src/services/MathService";

describe("MathService", () => {
  describe("factorial()", () => {
    it("should be able to calculate factorial correctly", () => {
      const number1 = 5;
      const expected = 120;
      const result = factorial(number1);

      expect(result).toEqual(expected);
    });
  });
});
