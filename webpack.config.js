const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/JS/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
        publicPath: './',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,  
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,  // Regola per CSS
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),  ]
};
