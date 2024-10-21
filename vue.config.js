const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',     // Запуск на всех интерфейсах
    port: 7000,          // Порт вашего локального сервера
    https: false,        // Если ngrok работает через HTTP, не включайте HTTPS на DevServer
    client: {
      webSocketURL: 'wss://https://5700-78-85-49-103.ngrok-free.app/ws', // WebSocket через ngrok
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers':'*',
      // 'Access-Control-Allow-Methods':'GET',
      // 'Content-Type': 'application/vnd.api+json',
    },
    proxy: {
      '/api': {
        target: 'http://130.193.54.234/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false,
        logLevel: 'debug'
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // '@/api/': path.resolve(__dirname, 'src/hooks/api')
      },
    },
  },
})
