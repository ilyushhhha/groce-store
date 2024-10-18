import {ref, computed} from 'vue'
const useCart = () => {
    const cartState = ref(false)

    const isClose = computed(() => cartState.value === true)
    const isOpen = computed(() => cartState.value === false)

    const openCart = () =>{
        cartState.value = true
    }

    const closeCart = () =>{
        cartState.value = false
    }

    return {
        closeCart,
        openCart,
        isOpen,
        isClose
    }
}

export default useCart;