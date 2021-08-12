module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: 'http://127.0.0.1:8888'  //需要访问的服务器
    }
}