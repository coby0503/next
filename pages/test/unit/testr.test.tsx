import { test as TTT } from "../../hooks/test1";

test("adds 1 + 2 to equal 3", () => {
  expect(TTT(1, 2)).toBe(3);
});
