const path = require('path');
// const env = process.env.NODE_ENV  || 'development';
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    publicPath: './',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'));
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xxx',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
};
