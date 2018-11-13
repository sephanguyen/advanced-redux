const webpack = require('webpack');
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/(node_modules)/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  entry: {
    index: [
      '@babel/plugin-transform-regenerator',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './src/main.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    noEmitOnErrors: true
  },
  devServer: { inline: true },
  devtool: 'source-map'
};
