const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: 
    {
        app:'./src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    },
    output: {
        filename: './[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test:/\.html$/,
            use: [
                {
                    loader:"html-loader"
                }
            ]
        }
      ]
    },
    plugins: [
    //y    new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename:"./index.html"
        })
    ]
  };