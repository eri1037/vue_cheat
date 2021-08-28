module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            'starry':{//需要访问的服务器
                target:'http://127.0.0.1:8888',
                pathRewrite:{'^/starry':''}
            },
            '/socket.io':{
                target:'http://127.0.0.1:8000',
                changeOrigin:false
            },
            '/sockjs-node':{
                target:'http://127.0.0.1:8000',
                ws:false
            }
        }
    }
}