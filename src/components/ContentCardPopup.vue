<template>
    <transition name="slide-fade">
      <div class="popup" v-if="visible">
        <div class="popup-content mx-auto rounded-t-lg shadow-lg bg-white p-4 sm:p-6">
          <h3 class="text-xl font-semibold mb-2">{{ productName }}</h3>
          <p class="text-gray-700 mb-4">Эта детальная информация может содержать все, что вы хотите сказать о продукте. Убедитесь, что это выглядит привлекательно!</p>
          <button 
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors" 
            @click="closePopup">Закрыть
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'ContentCardPopup',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      productName: {
        type: String,
        required: true
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .popup {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
  .slide-fade-enter {
    opacity: 0;
    transform: translateY(100%);
  }
  .slide-fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }
  </style>
  