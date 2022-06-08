module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'https://yaana-creats-api.vercel.app/server.js',
          secure: false,
        },
      },
    },
  };
