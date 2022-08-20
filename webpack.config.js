const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
	},
	resolve:{
		extensions: ['.js'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@images': path.resolve(__dirname, 'src/images/'),
		}
	},
	module:{
		rules:[
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use:{
					loader:'babel-loader'
				}
			},
			{
				test: /\.css|.styl$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin({
		  patterns: [
			{ from: path.resolve(__dirname, "src", "img"), to: "img" },
		  ],
		}),
		new Dotenv(),
	]
};
