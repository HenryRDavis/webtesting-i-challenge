const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("repair() should return 100 durability", () => {
      const item = {
        name: "namikazoobles",
        durability: 15,
        enhancement: 10,
      };

      const result = enhancer.repair(item);

      expect(result).toEqual({
        name: "namikazoobles",
        durability: 100,
        enhancement: 10,
      });
    });
  });

  describe("success()", () => {
    it("success() should increase enhancement by 1", () => {
      const item = {
        name: "Nami",
        durability: 22,
        enhancement: 11,
      };

      const result = enhancer.success(item);

      expect(result).toEqual({
        name: "Nami",
        durability: 22,
        enhancement: 12,
      });
    });
    
    it("success() but should stay at 20 if reached max of 20", () => {
      const item = {
        name: "Kazoobles",
        durability: 7,
        enhancement: 20,
      };

      const result = enhancer.success(item);

      expect(result).not.toEqual({
        name: "Kazoobles",
        durability: 7,
        enhancement: 21,
      });
    });
  });

  describe("fail()", () => {
    it("if enhancement is < 15, durability is decreased by 5", () => {
      const item = {
        name: "Azuki",
        durability: 10,
        enhancement: 12,
      };

      const result = enhancer.fail(item);

      expect(result).toEqual({
        name: "Azuki",
        durability: 5,
        enhancement: 12,
      });
    });

    it("if enhancement is >= 15, durability is decreased by 10", () => {
      const item = {
        name: "Azukiman",
        durability: 14,
        enhancement: 15,
      };

      const result = enhancer.fail(item);

      expect(result).toEqual({
        name: "Azukiman",
        durability: 4,
        enhancement: 15,
      });
    });

    it("if enhancement is > 16, decrease enhancement by 1 (will also decrease dura by 10)", () => {
      const item = {
        name: "Zoobles",
        durability: 14,
        enhancement: 18,
      };

      const result = enhancer.fail(item);

      expect(result).toEqual({
        name: "Zoobles",
        durability: 4,
        enhancement: 17,
      });
    });
  });

  describe("get()", () => {
    it("enhance is 0, name isnt modified", () => {
      const item = {
        name: "Namikuza",
        durability: 19,
        enhancement: 0,
      };

      const result = enhancer.get(item);

      expect(result).toEqual({
        name: "Namikuza",
        durability: 19,
        enhancement: 0,
      });
    });

    it("enhance is > 0, name is modified", () => {
      const item = {
        name: "Namikuza",
        durability: 19,
        enhancement: 5,
      };

      const result = enhancer.get(item);

      expect(result).toEqual({
        name: "[+5]Namikuza",
        durability: 19,
        enhancement: 5,
      });
    });
  });
});