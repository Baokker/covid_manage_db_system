const { defineConfig } = require('@vue/cli-service')

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  // unset multiword check
  lintOnSave:true,
  // svg
  chainWebpack(config) {
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
})