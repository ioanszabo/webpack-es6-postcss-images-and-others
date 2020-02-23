const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

require('dotenv').config()

module.exports = {
    context: __dirname,
    entry: ['whatwg-fetch', './index.js'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpeg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: 'body'
        }),
        new webpack.DefinePlugin({
        })
    ]
}