const { defineConfig } = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "./",

  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
})
