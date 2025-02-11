const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importa il plugin

module.exports = {
    entry: './src/index.js',  // File di ingresso per il bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Cartella di output per il bundle.js
        publicPath: '/', // Aggiungi questa riga per gestire correttamente il percorso in GitHub Pages
    },
    mode: 'development', // Modalità di sviluppo
    module: {
        rules: [
            {
                test: /\.js$/,  // Gestisci i file JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Usa Babel per transpile il codice JS
                    options: {
                        presets: ['@babel/preset-env'], // Preset per ES6+
                    },
                },
            },
            {
                test: /\.css$/,  // Gestisci i file CSS
                use: ['style-loader', 'css-loader'], // Usa style-loader e css-loader
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),  // Fai partire il server sulla cartella dist
        open: true,  // Apre il browser quando parte il server
        port: 9000,  // Porta del server
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',  // Usa il file index.html dalla cartella src
            filename: 'index.html',  // Genera index.html nella cartella dist
        }),
    ],
};
