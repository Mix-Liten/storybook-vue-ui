module.exports = {
  chainWebpack: config => {
    config.module
      .rule("storysource")
      .test(/\.stories\.js$/)
      .pre()
      .use("storysource")
      .loader(require.resolve("@storybook/addon-storysource/loader"));
    config.module
      .rule("vueinfo")
      .test(/\.vue$/)
      .post()
      .use("vueinfo")
      .loader(require.resolve("storybook-addon-vue-info/loader"));
  }
};
