const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importa il plugin

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
                test: /\.css$/, // Regola per i file CSS
                use: ['style-loader', 'css-loader'], // Usa style-loader e css-loader
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
            template: './index.html', // Usa il tuo file index.html come template
        }),
    ],
};
