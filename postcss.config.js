require("postcss")
require("postcss-import")
require("cssnext")
require("autoprefixer")
require("cssnano")
require("precss")

module.exports = {
  plugins: [
    [
      "postcss-import", {}
    ],
    ["cssnext", {}],
    ["precss", {}],
    ["autoprefixer", {browsers: ['last 2 versions']}],
    ["cssnano", {}]
  ]
};
