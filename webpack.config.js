const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },

  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "postcss-import",
                  "autoprefixer",
                  "cssnext",
                  "cssnano"
                ],
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'}), new MiniCssExtractPlugin()],
}
