const express = require('express');
const server = express();
const port = 8080;
const webpack = require('webpack');
const path = require('path');

runWebpack();
runServer();

function runServer() {
    console.log('Starting server...');

    server.use(express.static('public'));

    server.get('/sayhello', function (req, res) {
        res.send('Hello World!');
    });

    server.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

function runWebpack() {
    const compiler = webpack(require(path.join(__dirname, 'webpack.config.js')));
    console.log('Compiling web sources...');

    const watching = compiler.watch({}, (err, stats) => {
        if (!err) {
            console.log('Successfully compiled web sources');
        } else {
            process.exit();
        }
    });
}
