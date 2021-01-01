<template>
   <div class="news">
      <div class="wrapper">

         <a class="news__tit" @click="$router.push({ name: 'tidings' })">НОВОСТИ</a>

         <div class="news__content">
            <div class="news__item">
               <a href="#" class="news__images"></a>
               <a href="#" class="news__title">беседы инспекторов ГАИ о ПДД</a>
               <span class="news__text">В сентябре и октябре 2020 года инспектора ГАИ провели беседы о ПДД с учащимися 1-ых классов.</span>
            </div>

            <div class="news__item">
               <a href="#" class="news__images"></a>
               <a href="#" class="news__title">беседы инспекторов ГАИ о ПДД</a>
               <span class="news__text">В сентябре и октябре 2020 года инспектора ГАИ провели беседы о ПДД с учащимися 1-ых классов.</span>
            </div>

            <div class="news__item">
               <a href="#" class="news__images"></a>
               <a href="#" class="news__title">беседы инспекторов ГАИ о ПДД</a>
               <span class="news__text">В сентябре и октябре 2020 года инспектора ГАИ провели беседы о ПДД с учащимися 1-ых классов.</span>
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

.news {
   background-color: #f5f5f5;
   padding: 70px 0 60px 0;
   &__tit {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      line-height: 1.3;
      font-size: 26px;
      color: #4C5665;
      cursor: pointer;
      transition: all .5s;
      &:hover {
         color: #626f82; 
      }
   }
	&__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
	}
   &__item {
      display: flex;
      flex-direction: column;
	}
	&__images {
      width: 420px;
      height: 270px;
      background-image: url('../assets/images/news.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      overflow: hidden;
      margin-bottom: 15px;
      transition: all 0.5s;
      &:hover {
         opacity: .9;
      }
	}
	&__title {
      max-width: 420px;
      color: #4C5665;
      margin-bottom: 10px;
      transition: all .4s;
      &:hover {
         color: #C55A11;
      }
	}
	&__text {
      max-width: 420px;
      line-height: 1.3;
      font-size: 14px;
      color: #555;
   }
}

@media (max-width: 1380px){
   .news__content {
      flex-direction: column;
      align-items: center;
   }
   .news__item {
      max-width: 90%;
      margin: 20px auto;
   }
   .news__images {
      width: 100%;
      max-height: 70vh;
      margin: 10px auto;
   }
   .news__title, .news__text {
      max-width: 90%;
      margin: 5px auto;
      text-align: center;
   }
}

</style>