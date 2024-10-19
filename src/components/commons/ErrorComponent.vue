<template>
    <div class="error">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
   
  export default {
    name: 'ErrorComponent',
    props: {
      message: String
    }
  };
  </script>
  