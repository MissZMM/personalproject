module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4040',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    }
}
