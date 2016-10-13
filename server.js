//work with Node.js express and webpack HMR
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.hot.config.js');

var app = new(require('express'))();
var port = 9527;
var host = '0.0.0.0';	//Localhost

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
    res.sendFile(`${__dirname }` + '/index.html')
});

app.listen(port, host, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("===> React server has bulit at port %s. \n Check it at http://%s:%s/", port, host, port)
    }
});
