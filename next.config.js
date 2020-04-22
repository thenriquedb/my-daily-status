const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS({
  //  Configurando variaveis ambiente
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
