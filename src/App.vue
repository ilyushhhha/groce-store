<template>
  <!-- <MainWrapper> -->
    <!-- <template #header> -->
      <MainNav />
    <!-- </template> -->
    <!-- <template #footer> -->
      <ContentCart/>
    <!-- </template> -->
  <!-- </MainWrapper> -->
  <ContentProduct/>
  
</template>
  
<script>
// import {inject} from 'vue'

import ContentCart from "@/components/ContentCart";
import ContentProduct from '@/components/ContentProduct'
import MainNav from '@/components/MainNav'
// import MainWrapper from '@/layout/MainWrapper'


export default {
  name: 'App',
  components: {
    ContentCart,
    ContentProduct,
    MainNav,
    // MainWrapper
  },

}
</script>

<style>

</style>
