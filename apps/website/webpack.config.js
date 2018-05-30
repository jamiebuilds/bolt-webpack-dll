var path = require('path');
var webpack = require('webpack');

module.exports = {
	mode: 'none',
	entry: {
    index: ['./index.js'],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		library: '[name]_[hash]'
	},
	plugins: [
    new webpack.DllReferencePlugin({
			scope: 'foo',
      context: path.join(path.dirname(require.resolve('foo/package.json')), 'src'),
      manifest: require('foo/dist/webpack-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
			scope: 'bar',
      context: path.join(path.dirname(require.resolve('bar/package.json')), 'src'),
      manifest: require('bar/dist/webpack-manifest.json'),
    })
	],
};
