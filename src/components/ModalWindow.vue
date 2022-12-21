<template>
  <div class="modal-window">
    <div class="modal-inner">
        <slot />
    </div>
  </div>
    
</template>

  <script>



export default {

   
  }
  
  </script>

  <style lang="css">
    .modal-inner {
        width: 300px;
        height: 300px;
        background-color: white;
        padding: 25px;
    }
    
  </style>