const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.base.config.js");

// HMR hot-middeleware entry
config.entry.app.unshift(
    'webpack-hot-middleware/client?path=http://localhost:9527/__webpack_hmr'
);

// development file for HMR at localhost path
config.output.filename = "[name].js";
config.output.publicPath = "http://localhost:9527/static/";
config.devtool = "#cheap-module-eval-source-map";

config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

// autoprefix adds cross-browser CSS script automatically like -webkit-, -moz-, -o)
config.module.loaders.push({
    test: /\.scss$/,
    loader: 'style!css?modules!autoprefixer!sass?sourceMap'
});

module.exports = config;
