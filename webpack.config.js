const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', // Percorso del tuo file JS principale
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Uscita nella cartella dist
        publicPath: 'https://scantalupo.github.io/Hacker-News/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,  // Regola per JavaScript
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
            template: './src/index.html', // Usa il file src/index.html come template
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),  // Nome del file CSS estratto
    ],
};
