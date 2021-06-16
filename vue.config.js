module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "src/css/globalcss.scss";
          `,
      },
    },
  },
};
