module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'https://api.yaanacreats.com/server.js',
          secure: false,
        },
      },
    },
  };
