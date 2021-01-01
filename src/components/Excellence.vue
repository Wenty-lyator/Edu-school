<template>
   <div class="templ">
     <div class="wrapper">

         <a @click="$router.push({ name: 'excellen'})" class="templ__title">ГОРДИМСЯ</a>

         <div class="templ__items">

            <div class="templ__item">
               <img src="../assets/images/girl.jpg" alt="girl" class="templ__images">
               <span class="templ__text">Абдыкадырова Нуска</span>
            </div>

            <div class="templ__item">
               <img src="../assets/images/girl.jpg" alt="girl" class="templ__images">
               <span class="templ__text">Абдыкадырова Нуска</span>
            </div>

            <div class="templ__item">
               <img src="../assets/images/girl.jpg" alt="girl" class="templ__images">
               <span class="templ__text">Абдыкадырова Нуска</span>
            </div>

            <div class="templ__item">
               <img src="../assets/images/girl.jpg" alt="girl" class="templ__images">
               <span class="templ__text">Абдыкадырова Нуска</span>
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