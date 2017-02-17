const webpack = require("webpack");
const path = require("path");
const ExtractText = require('extract-text-webpack-plugin');
const config = require("./webpack.base.config.js");

// product javascript path
config.output.filename = "[name]-[chunkhash].js";
config.output.publicPath = "/dist/";
config.devtool = false;

// Extract common style and chunks of vendor in app 
config.plugins.push(
    new ExtractText('[name]-[chunkhash].css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['app'],
        filename: 'vendor-[chunkhash].js',
        minChunks: 2
    }),
    new webpack.optimize.UglifyJsPlugin()
);

// extract SCSS to CSS and autoprefix 
config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractText.extract('style', 'css?modules!sass')
});

module.exports = config;
