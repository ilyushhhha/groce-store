<template>
    <div class="wrapper">
        <slot name="header"></slot>
        <slot name="footer"></slot>  
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainWrapper',
  };
  </script>
  