module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-card-api-app/'
    : '/',
};
