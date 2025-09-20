import { describe, test, expect } from "vitest";
import { tambah, kurang, kali, bagi } from "./calculator.js";

describe("Kalkulator", () => {
  test("penjumlahan", () => {
    expect(tambah(2, 3)).toBe(5);
  });

  test("pengurangan", () => {
    expect(kurang(10, 4)).toBe(6);
  });

  test("perkalian", () => {
    expect(kali(3, 7)).toBe(21);
  });

  test("pembagian", () => {
    expect(bagi(10, 2)).toBe(5);
  });

  test("pembagian dengan nol", () => {
    expect(() => bagi(5, 0)).toThrow("Tidak bisa bagi nol");
  });
});
