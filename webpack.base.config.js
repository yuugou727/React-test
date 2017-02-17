const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: ['./src/app.js'],
        vendor: ['react', 'react-dom','jquery','bootstrap']
    },

    output: {
        path: path.resolve(__dirname ,'dist'),
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [],
    module: {
        loaders: [
            // babel-loader transforms JSX to js ( preset-es2015 & preset-react in .babelrc file)
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: `${__dirname}`
            }, {
                test: /\.(jpg|gif|png)$/,
                loader: "file",
                exclude: /node_modules/
            },

            // url-loader: if woff(woff2) file is smaller than 10000bytes,
            // encodes it to Base64 in order to reduce request.
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            },
            // {   
            //     test: 'jquery/jquery.min.js', 
            //     loader: 'expose?jQuery'
            // },
            //注释 将jQuery配置到全局，bootstrap.min.js里就能引用到。
        ]
    }
};
