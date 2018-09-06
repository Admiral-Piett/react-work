// entry point - src/app.js
// output

const path = require('path');
// Not compatible with WebPack v4 - 9/6/2018
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSExtract = new MiniCSSExtractPlugin();

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        // loader - customize how to load a file when it sees it
        module: {
            rules: [{
                // Run babel on all .js files
                test: /\.js$/,
                use: 'babel-loader',
                // Ignore all files in this director
                exclude: /node_modules/
            },{
                // grab any file that ends with .css
                test: /\.s?css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}
