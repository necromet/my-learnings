// const webpack = require('webpack');

// module.exports = {
//   webpack: {
//     configure: {
//       resolve: {
//         fallback: {
//           "path": require.resolve("path-browserify"),
//           "os": require.resolve("os-browserify/browser"),
//           "fs": false
//         }
//       },
//       plugins: [
//         new webpack.ProvidePlugin({
//           process: 'process/browser',
//         }),
//       ]
//     }
//   }
// };

const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        process: require.resolve("process/browser"),
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        fs: false, // fs cannot be polyfilled
      };

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
        })
      );

      return webpackConfig;
    },
  },
};
