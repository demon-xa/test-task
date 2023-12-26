const { DefinePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: false,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // Specify development API URL
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
