if (typeof window === "undefined") {
  module.exports = require("./transvoxel-cjs");
} else {
  module.exports = require("./transvoxel-iife");
}
