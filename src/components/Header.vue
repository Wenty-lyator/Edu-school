<template>
   <header class="head">
         <div class="wrapper">
            <div class="head__content">
               <div @click="$router.push({ name: 'main' })" class="head__logo">
                  <img src="../assets/images/logo.jpg" alt="logo" class="head__logo-img">
               </div>
               <div class="head__title">
                  <div class="head__title-background">
                     <p class="head__text">УВК ШГ № 38</p>
                     <span class="head__subtext">Учебно-воспитательный комплекс школа-гимназия №38 им. Райкана Шукурбекова</span>
                  </div>
               </div>
            </div>
         </div>
      </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.head {
   background-image: url("../assets/images/background.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   padding: 80px 0 50px 0;
   &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 105px;
   }
   &__logo {
      position: relative;
      cursor: pointer;
      right: -25px;
      &-img {
         width: 180px;
         height: 180px;
         border-radius: 150px;
         // картинка имеет черные полосы на краях, поменяете на нормальную вернёте border
         // border: 10px solid #fff;
      }
   }
   &__text {
      line-height: 1.25;
      font-size: 26px;
      margin: 0;
   }
   &__title {
      &-background {
         padding: 40px;
         border-radius: 0 15px 15px 0;
         background: rgba(0,0,0,.6);
         color: #FFF;
      }
   }
}

@media (max-width: 930px){
   .head__title-background {
      padding: 15px 15px 15px 45px;
   }
}

@media (max-width: 580px){
   .head__title {
      margin-left: -15px;
   }
   .head__content {
      padding-right: 20px;
   }
   .head__logo {
      right: -45px;
   }
   .head__logo-img {
      width: 130px;
      height: 130px;
   }
   .head__title-background {
      padding: 15px 15px 15px 65px;
   }
   .head__subtext {
      font-size: 13px;
      line-height: 1.3;
   }
}

@media (max-width: 515px){
   .head__title-background {
      padding: 5px 15px 5px 70px;
   }
}

@media (max-width: 440px){
   .head__content {
      flex-direction: column;
      padding: 0;
   }
   .head__logo {
      position: unset;
      margin-bottom: 15px;
   }
   .head__logo-img {
      width: 180px;
      height: 180px;
   }
   .head__title {
      margin: 0;
   }
   .head__title-background {
      padding: 15px;
      border-radius: 15px;
   }
}

</style>