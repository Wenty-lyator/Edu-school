<template>
<div class="wrapper">
   <splide>
      <splide-slide>
         <img src="../assets/images/flowers.jpg" alt="flowers" class="slider__images">
      </splide-slide>
      <splide-slide>
         <img src="../assets/images/studies.jpg" alt="studies" class="slider__images">
      </splide-slide>
      <splide-slide>
         <img src="../assets/images/flowers.jpg" alt="flowers" class="slider__images">
      </splide-slide>
      <splide-slide>
         <img src="../assets/images/studies.jpg" alt="studies" class="slider__images">
      </splide-slide>
      <splide-slide>
         <img src="../assets/images/flowers.jpg" alt="flowers" class="slider__images">
      </splide-slide>
      <splide-slide>
         <img src="../assets/images/studies.jpg" alt="studies" class="slider__images">
      </splide-slide>
   </splide>
</div>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
}
</script>

<style scoped>

.slider__images {
   width: 100%;
}

</style>