const path = require('path');
const TtagWebpackPlugin = require('ttag-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [
    new TtagWebpackPlugin({
      translations: {
        uk: path.resolve(__dirname, './i18n/uk.po')
      }
    })
  ]
};
