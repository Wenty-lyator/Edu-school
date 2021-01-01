<template>
<div class="wrapper">

   <div class="text__content">

   <p class="title">КОНТАКТЫ</p>

   <div class="text-info">

      <div class="nums">
         <span class="text">Телефон горячей линии Управления образования мэрии г. Бишкек: <span class="text-str">(0312) 61-00-91, 61-00-92, 61-39-72</span></span>

         <span class="text">Телефон доверия Центра помощи детям при мэрии г. Бишкек: <span class="text-str">(0312) 44-25-10, 44-25-74, 54-29-34</span></span>

         <span class="text">Центры оперативного реагирования ГУВД г. Бишкек: <span class="text-str">102</span></span>
      </div>

      <Form></Form>

   </div>

   </div>

</div>
</template>

<script>
   import Form from '../components/Form.vue'
   export default {
      components: 
      {
         Form,
      }
   }
</script>

<style scoped>

.text-info {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.nums {
   display: flex;
   flex-direction: column;
   max-width: 45%;
}

@media (max-width: 930px){
   .text-info {
      flex-direction: column;
   }
   .nums {
      max-width: 95%;
      margin: 20px 0;
   }
}

</style>