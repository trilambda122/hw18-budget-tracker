const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "distro")
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" },
        { from: "./src/styles.css", to: "styles.css" }

      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/sw-src.js",
      swDest: "sw.js"

    })
  ],

};