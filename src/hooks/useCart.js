import { reactive, computed } from 'vue'

export function useCart() {
  const cartState = reactive({
    isOpen: false,
    cartItems: [],
    totalPrice: 0
  })

  const openCart = () => {
    cartState.isOpen = true
  }

  const closeCart = () => {
    cartState.isOpen = false
  }

  const addToCart = (item) => {
    cartState.cartItems.push(item)
    // cartState.totalPrice += item.price
  }

  const removeFromCart = (index) => {
    cartState.totalPrice -= cartState.cartItems[index].price
    cartState.cartItems.splice(index, 1)
  }

  const checkout = () => {
    alert('Заказ оформлен')
    cartState.cartItems = []
    cartState.totalPrice = 0
  }
  const totalPrice = computed(() => {
    return cartState.cartItems.reduce((sum, item) => {
      return sum + (item.price || 0); // Обработка случая, если price не указана
    }, 0);
  });

  // Возвращаем объект с методами и состояниями корзины
  return {
    isOpen: computed(() => cartState.isOpen),
    cartItems: computed(() => cartState.cartItems),
    totalPrice,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    checkout
  }
}
