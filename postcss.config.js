require("postcss")
require("postcss-import")
require("cssnext")
require("autoprefixer")
require("cssnano")
module.exports = {
  plugins: [
    [
      "postcss-import", {}
    ],
    ["cssnext", {}],
    ["autoprefixer", {browsers: ['last 2 versions']}],
    ["cssnano", {}]
  ]
};
