const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const apimock = process.env.API_MOCK == "1";
const apiPath = apimock ? "src/api/apiMock.js" : "src/api/api.js";
console.log(apiPath);

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "~api": path.resolve(__dirname, apiPath),
      },
    },
  },
});
