const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, '/publc');

module.exports = {
	devtool: "eval-source-map",
	entry: {
		//app - это название итогового файла
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: outputPath,
		filename: '[name].js'
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets'),
				use: 'url-loader?limit=10000&name=assets/[name]-[hash]/txt'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: outputPath,
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		//host: '0.0.0.0'
	}
}