require('webpack');
require('webpack-dev-server');
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4040',
                pathRewrite: {
                    '^/api': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
}
