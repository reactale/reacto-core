const path = require('path');
// const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const { VERSION } = require('./dist/transpiled-ts-js/info')
module.exports = {
  entry: './dist/transpiled-ts-js/index.js',
  // devtool: "inline-source-map",
  output: {
    filename: `reacto-v${VERSION}.js`,
    path: path.resolve(__dirname, 'dist'),
    // library: {
    //   type: "module",
    //   name: "rto"
    // },
    // library: "rto",
    // libraryTarget: "var"
  },
  plugins: [
    // new EsmWebpackPlugin()  // https://stackoverflow.com/questions/41289200/output-an-es-module-using-webpack
  ]
};