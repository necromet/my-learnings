const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "path": require.resolve("path-browserify"),
          "os": require.resolve("os-browserify/browser"),
          "fs": false
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]
    }
  }
};