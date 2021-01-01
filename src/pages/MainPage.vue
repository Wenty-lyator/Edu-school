<template>
<div>
   <Slider></Slider>
   <News></News>
   <Statistic></Statistic>
   <Excellence></Excellence>
   <Partners></Partners>
   <Certificate></Certificate>
</div>
</template>

<script>
import Slider from '../components/Slider.vue'
import News from '../components/News.vue'
import Statistic from '../components/Statistics.vue'
import Excellence from '../components/Excellence.vue'
import Partners from '../components/Partners.vue'
import Certificate from '../components/Certificate.vue'

export default {
   components: 
   {
      Slider,
      News,
      Statistic,
      Excellence,
      Partners,
      Certificate,
   }
}
</script>

<style lang="scss" scoped>
   // стили либо в самих компонентах либо в main.scss 
</style>