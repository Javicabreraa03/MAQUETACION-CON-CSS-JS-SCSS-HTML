const path= require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { Generator } = require('webpack');

module.exports = (_ ,argv )=> ({
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    experiments: {
        outputModule: true
    },

    devServer:{
        port:3000,
        historyApiFallback: true,

    },
    devtool:argv.mode === 'development' ? 'source-map' : false,
    module: {
        rules: [
            
            {
                test: /\.scss$/,
                use: [
                  'style-loader', // Inserta los estilos en el DOM
                  'css-loader',   // Transforma CSS a JavaScript
                  'sass-loader'   // Transforma SCSS a CSS
                ]
              },
              
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                },
            },
            {
                test: /\.(ts|tsx|js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
           /* {
                test:/\.css|s[ac]ss$/i,
                exclude : /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }*/

            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|mp3|wav|mp4|webm)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name] [ext]'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [ 'html-loader']
            }
        ]
       
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            scriptLoading: 'module'

        })
    ],
     mode: 'development',
 })