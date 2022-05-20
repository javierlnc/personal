const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPLugin = require('copy-webpack-plugin');

module.exports ={
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions : ['.js']
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
            inject : true,
            template: './public/index.html',
            filename: './index.html'
        }
        ),
        new CopyWebpackPLugin({
            patterns: [{ from: './src/styles/main.css',
            to: ''}],
        })
    ]

}