<template>
  <div class="wrapper">
     <div class="text__content">

        <p class="title">РАСПИСАНИЕ</p>

        <a href="#" class="subtext">Расписание 18-19 КЫРГ</a>

        <a href="#" class="subtext">Расписание 18-19 РУС</a>

        <div class="timetable-buttons">
            <button class="timetable-btn">Первая смена</button>
            <button class="timetable-btn">Вторая смена</button>
        </div>

     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.timetable-buttons {
   display: flex;
   flex-direction: row;
}

.timetable-btn {
   background: none;
   border: 1px solid #DDD;
   color: #4C5665;
   font-size: 14px;
   font-weight: 600;
   text-align: center;
   padding: 10px;
   margin: 0 10px;
   width: 270px;
   transition: all .2s;
   &:hover {
      border-color: #C55A11;
   }
}

@media (max-width: 500px){
   .timetable-buttons {
      flex-direction: column;
   }
}

</style>