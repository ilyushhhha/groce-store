import { ref, computed, provide } from 'vue';

export function useCart() {
  const state = ref({
    isOpen: false,
    cartItems: [],
  });

  const addToCart = (item) => {
    state.value.cartItems.push(item);
  };

  const removeFromCart = (index) => {
    state.value.cartItems.splice(index, 1);
  };

  const openCart = () => {
    state.value.isOpen = true;
  };

  const closeCart = () => {
    state.value.isOpen = false;
  };

  // Provide state and methods
  provide('addToCart', addToCart);
  provide('removeFromCart', removeFromCart);
  provide('openCart', openCart);
  provide('closeCart', closeCart);
  provide('isOpen', computed(() => state.value.isOpen));
  provide('itemCount', computed(() => state.value.cartItems.length));
  provide('totalPrice', computed(() => state.value.cartItems.reduce((total, item) => total + item.price, 0)));
  provide('cartItems', computed(() => state.value.cartItems));

  return {
    isOpen: computed(() => state.value.isOpen),
    itemCount: computed(() => state.value.cartItems.length),
    totalPrice: computed(() => state.value.cartItems.reduce((total, item) => total + item.price, 0)),
    cartItems: computed(() => state.value.cartItems),
  };
}
