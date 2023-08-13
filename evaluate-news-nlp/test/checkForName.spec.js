import { checkForName } from "../src/client/js/nameChecker"
describe("Testing the submit functionality", () => {
test("Testing the checkForName('Nada') function", () => {
      expect(checkForName('Nada')).toBe('Unauthorized');
})
test("Testing the checkForName() function", () => {
      expect(checkForName('Janeway')).toBe('Welcome, Captain!');
})
});