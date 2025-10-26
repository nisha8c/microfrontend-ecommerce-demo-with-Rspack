const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');
const HtmlRspackPlugin = require('html-rspack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // 🧩 FIX: headers must be at this level (not nested)
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'builtin:swc-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList.tsx',
      },
      manifest: {
        fileName: 'mf-manifest.json',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
      dts: { generate: true },
    }),

    new HtmlRspackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
    }),
  ],
};
