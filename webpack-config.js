let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
    entry: path.resolve(__dirname, 'src/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src/app/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: 'src/app/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader'

        }]
    }
};

module.exports = config;