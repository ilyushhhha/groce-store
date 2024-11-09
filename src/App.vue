<template>
  <!-- <MainWrapper> -->
  <!-- <template #header> -->
  <MainNav />
  <!-- </template> -->
  <!-- <template #footer> -->
  <ContentCart />
  <!-- </template> -->
  <!-- </MainWrapper> -->
  <ContentProduct />

</template>

<script setup>
// import {inject} from 'vue'

import ContentCart from "@/components/ContentCart";
import ContentProduct from '@/components/ContentProduct'
import MainNav from '@/components/MainNav'
// import MainWrapper from '@/layout/MainWrapper'


</script>

<style></style>
