import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css' 
import { useCart } from './hooks/useCart'
import { useProductService } from './hooks/useProductService'

const cart = useCart()
const products = useProductService()

createApp(App)
.provide('cart', cart)
.provide('products', products)
.mount('#app')
