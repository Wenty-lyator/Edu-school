<template>
  <footer class="footer">
      <div class="wrapper">

         <div class="footer__content">

            <div class="footer__col">
               <a href="#" class="footer__link">Конституция КР</a>
               <a href="#" class="footer__link">Законы</a>
               <a href="#" class="footer__link">Свидетельство</a>
            </div>
            <div class="footer__col">
               <a href="#" class="footer__link">Нормативные документы</a>
               <a href="#" class="footer__link">План мероприятий</a>
               <a href="#" class="footer__link">Памятки</a>
               <a href="#" class="footer__link">Отчеты</a>
            </div>
            <div class="footer__col">
               <a href="#" class="footer__link">Образование за рубежом</a>
            </div>
            <div class="footer__col">
               <a class="footer__link" href="tel:+996312631251">+996 (312) 631-251</a>
               <span class="footer__text">г. Бишкек, мкр. Аламедин-1</span>
               <div class="footer__social">
                  <a href="#" class="footer__social-link">
                     <img src="../assets/images/instagram.svg" alt="instagram" class="footer__social-img">
                  </a>
                  <a href="#" class="footer__social-link">
                     <img src="../assets/images/instagram.svg" alt="instagram" class="footer__social-img">
                  </a>
                  <a href="#" class="footer__social-link">
                     <img src="../assets/images/instagram.svg" alt="instagram" class="footer__social-img">
                  </a>
               </div>
            </div>

         </div>

      </div>
   </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.footer {
   background-color: #292929;
   padding: 30px 0;
   &__content {
      display: grid;
      grid-template: 1fr / 1fr 1fr 1fr 1fr;
   }
   &__col {
      display: flex;
      flex-direction: column;
   }
   &__social {
      display: flex;
      flex-direction: row;
      margin-top: 5px;
      &-img {
         width: 35px;
         height: 35px;
      }
      &-link {
         margin-right: 10px;
      }
   }
   &__link, &__text {
      margin: 5px 0;
      color: #EEE;
   }
   &__link {
      cursor: poiter;
   }
}

@media (max-width: 850px){
   .footer__content {
      grid-template: 1fr 1fr / 1fr 1fr;
   }
   .footer__col {
      margin: 10px 0;
      justify-content: center;
   }
}

@media (max-width: 470px){
   .footer__content {
      grid-template: 1fr 1fr 1fr 1fr / 1fr;
   }
}

</style>