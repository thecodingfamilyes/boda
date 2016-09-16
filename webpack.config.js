const webpack = require('webpack');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
		]
	}
}