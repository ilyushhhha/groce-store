const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',     // Запуск на всех интерфейсах
    port: 8080,          // Порт вашего локального сервера
    https: false,        // Если ngrok работает через HTTP, не включайте HTTPS на DevServer
    client: {
      webSocketURL: 'wss://https://78e5-78-85-49-103.ngrok-free.app/ws', // WebSocket через ngrok
    },
    headers: {
      'Access-Control-Allow-Origin': '*', // Разрешить доступ со всех источников
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Сокращенный путь для импорта
      },
    },
  },
})
