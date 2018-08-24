// entry point - src/app.js
// output

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader - customize how to load a file when it sees it
    module: {
        rules: [{
            use: 'babel-loader',
            // Run babel on all .js files
            test: /\.js$/,
            // Ignore all files in this director
            exclude: /node_modules/
        },{
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            // grab any file that ends with .css
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};   