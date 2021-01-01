<template>
   <div class="stats">
      <div class="wrapper">

         <div class="stats__title">МЫ В ЦИФРАХ</div>

         <div class="stats__content">
            <div class="stats__item">
               <span class="stats__num">41</span>
               <span class="stats__subtitle">ЛЕТ ШКОЛЕ</span>
            </div>
            <div class="stats__item">
               <span class="stats__num">3726</span>
               <span class="stats__subtitle">УЧЕНИКОВ</span>
            </div>
            <div class="stats__item">
               <span class="stats__num">395</span>
               <span class="stats__subtitle">ВЫПУСКНИКОВ В ГОД</span>
            </div>
            <div class="stats__item">
               <span class="stats__num">26492</span>
               <span class="stats__subtitle">КНИГ В БИБЛИОТЕКЕ</span>
            </div>
         </div>

      </div>
   </div>


   <!-- впринципе как вариант если будет невтерпёж https://www.npmjs.com/package/animated-number-vue -->


</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.stats {
   padding: 35px 0;
   &__title {
      margin: 0 0 30px;
      text-align: center;
      line-height: 1.3;
      text-transform: uppercase;
      font-size: 26px;
      color: #4C5665;
	}
	&__content {
      display: grid;
      grid-template: 1fr / 1fr 1fr 1fr 1fr;
      margin: 0 auto;
	}
	&__item {
      display: flex;
      flex-direction: column;
   }
   &__num {
      margin: 1px 0 5px;
      font-size: 24px;
      color: #4C5665;
   }
	&__subtitle {
      font-size: 14px;
      color: #6d7b91;
	}
}

@media (max-width: 800px){
   .stats__content {
      grid-template: 1fr 1fr / 1fr 1fr;
   }
   .stats__item {
      margin: 20px 0;
   }
   .stats__num, .stats__subtitle {
      text-align: center;
   }
}

@media (max-width: 410px){
   .stats__content {
      grid-template: 1fr 1fr 1fr 1fr/ 1fr;
   }
}

</style>