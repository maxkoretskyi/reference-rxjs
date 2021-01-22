const express = require('express');
const index = express();
const port = 8080;
const webpack = require('webpack');
const path = require('path');

runWebpack();

function runServer() {
    console.log('Starting server...');

    index.use(express.static('public'));

    index.get('/sayhello', function (req, res) {
        res.send('Hello World!')
    });

    index.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

function runWebpack() {
    const compiler = webpack(require(path.join(__dirname, 'webpack.config.js')));
    console.log('Compiling web sources...');

    const watching = compiler.watch({}, (err, stats) => {
        if (!err) {
            console.log('Successfully compiled web sources');
            runServer();
        }
    });
}
