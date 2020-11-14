const { regularCellData } = require("./transvoxel-cjs");

it("should return a cell", () => {
  expect(regularCellData[0].geometryCounts).toBe(0);
});
