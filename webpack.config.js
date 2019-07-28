const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode:"development",
	entry:"./index.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js",
		//publicPath:"/assets/"
	},
	resolve:{
		extensions:[".js",".json",".jsx"]
	},
	devServer:{
		hot:true,
		host:'127.0.0.1',
		port:9000
	},
	devtool:"source-map",
	module:{
		 rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		 ]
	},
	plugins: [new HtmlWebpackPlugin()]
}