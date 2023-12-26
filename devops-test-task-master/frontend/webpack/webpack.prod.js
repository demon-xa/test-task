const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // Specify production API URL
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL),
      },
    }),
  ],
};
