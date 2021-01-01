<template>
  <div class="templ">
     <div class="wrapper">

         <a @click="$router.push({ name: 'certificat' })" class="templ__title">СЕРТИФИКАТЫ</a>

         <div class="templ__items">

            <div class="templ__item">
               <img src="../assets/images/certificate.jpg" alt="girl" class="templ__images templ__images__bord">
            </div>

            <div class="templ__item">
               <img src="../assets/images/certificate.jpg" alt="girl" class="templ__images templ__images__bord">
            </div>

            <div class="templ__item">
               <img src="../assets/images/certificate.jpg" alt="girl" class="templ__images templ__images__bord">
            </div>

            <div class="templ__item">
               <img src="../assets/images/certificate.jpg" alt="girl" class="templ__images templ__images__bord">
            </div>

         </div>

      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// стили от этого компонента находятся в main.scss
</style>