const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resourcePath = process.env.NODE_ENV === `production` ? `/people-list/` : `/`;

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    port: 8080,
    compress: false,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      resourcePath,
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `ts-loader`,
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          `css-loader`,
          `postcss-loader`,
          `resolve-url-loader`,
          `sass-loader`
        ].filter(Boolean)
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
};
