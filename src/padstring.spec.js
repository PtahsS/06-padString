/* global require, test, expect */
const { padString } = require("./index");

describe('padString checking...', () => {

  test("Has to be only one symbol", () => {
        expect(padString('hello My World', 9, "*", true)).toBe("hello My World");
  });

  test("Has to be only the string", () => {
        expect(padString('hello My World', 2, "*", true)).toBe("hello My World");
  });

  test("Symbols have to be at the end of string", () => {
        expect(padString('hello My World', 20, "*")).toBe("hello My World******");
  });

  test("Symbols have to be at the end of string", () => {
        expect(padString('hello My World', 20, "*", false)).toBe("hello My World******");
  });

  test("Symbols have to be at the start of string", () => {
        expect(padString('hello My World', 20, "*", true)).toBe("******hello My World");
  });

   test("Symbols have to be at the start of string", () => {
        expect(padString('hello My World', 20, "*f", true)).toBe("******hello My World");
  });

})

