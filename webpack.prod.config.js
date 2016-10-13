const webpack = require("webpack");
const path = require("path");
const ExtractText = require('extract-text-webpack-plugin');
const config = require("./webpack.base.config.js");

// product javascript path
config.output.filename = "[name]-[chunkhash].js";
config.output.publicPath = "/static/";
config.devtool = false;

// creates product JS & CSS file with chuckhash suffix
config.plugins.push(
    new ExtractText('[name]-[chunkhash].css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['app'],
        filename: 'vendor-[chunkhash].js',
        minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin()
);

// extract-text-webpack-plugin transfers SCSS to CSS and autoprefix 
config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractText.extract('style', 'css?modules!sass')
});

module.exports = config;
