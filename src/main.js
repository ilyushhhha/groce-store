import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css' 
import useCart from './hooks/useCart'

const cart = useCart()

createApp(App).provide('cart', cart).mount('#app')
