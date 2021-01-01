<template>
<nav>

   <!-- тут два субнава не запутайся, один от декстоп версий а другой субнав от мобильной и они друг друга заменяют в зависимости от ширины экрана пользователя P.s. комменты оставляю не для себя а для того кто будет в будущем работать с этим кодом, так как я не тварь а хочу что бы человеку который будет с этим работать было легче его редактировать исправлять корректировать и т.д. Но если всё будет ну прям ващэ всё плохо (не получаться) то вот моя телега @daniyar_uulu ауе жизнь ворам -->

  <div class="desc">
    <div class="navbar">

      <div class="wrapper">

         <div class="subnav">
            <button class="subnavbtn">Школа</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'about' })">О нас</a>
               <a @click="$router.push({ name: 'teachers' })">Сотрудники</a>
               <a @click="$router.push({ name: 'education' })">Учебно-воспитательная работа</a>
               <a @click="$router.push({ name: 'methods' })">Методическая служба</a>
               <a @click="$router.push({ name: 'educat-teach' })">Воспитательная работа</a>
               <a @click="$router.push({ name: 'excellens' })">Гордимся</a>
               <a @click="$router.push({ name: 'process' })">Учебный процесс</a>
               <a @click="$router.push({ name: 'library' })">Информационно-библиотечная служба</a>
               <a @click="$router.push({ name: 'psychology' })">Социально-психологическая служба</a>
            </div>
         </div>
         <a @click="$router.push({ name: 'tidings' })">Новости</a>
         <div class="subnav">
            <button class="subnavbtn">Ученикам</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'parlament' })">ШСУ</a>
               <a @click="$router.push({ name: 'timetable' })">Расписание</a>
               <a @click="$router.push({ name: 'interest' })">Кружки и секций</a>
               <a @click="$router.push({ name: 'useful' })">Полезная информация</a>
            </div>
         </div> 
         <div class="subnav">
            <button class="subnavbtn">Родителям</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'for-parents' })">Информация для родителей</a>
               <a @click="$router.push({ name: 'shape' })">Школьная форма</a>
               <a @click="$router.push({ name: 'acceptance' })">О приёме в школу</a>
               <a @click="$router.push({ name: 'association' })">Общественное объединение</a>
            </div>
         </div> 
         <div class="subnav">
            <button class="subnavbtn">Ещё</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'board' })">Попечительский совет</a>
               <a @click="$router.push({ name: 'schedule' })">Дистанционное обучение</a>
               <a @click="$router.push({ name: 'contacts' })">Контакты</a>
               <a @click="$router.push({ name: 'videos' })">Видеогалерея</a>
               <a @click="$router.push({ name: 'expensive' })">Электронный дневник</a>
            </div>
         </div>

        <div class="langs">
          <button class="lang-btn">
            <img src="../assets/images/kg.png" alt="kyrgyz" class="lang-img">
          </button>
          <button class="lang-btn">
            <img src="../assets/images/ru.png" alt="russian" class="lang-img">
          </button>
        </div>
      </div>

    </div>
  </div>
  <div class="mobile">


      <div id="menu">
         <button @click="show = !show" class="mobile-btn">Меню</button>
         <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
         >

         <div v-if="show" class="mobile-items">

         <img src="../assets/images/logo.jpg" alt="logo" class="mobile-logo">

          <div class="subnav">
            <button class="subnavbtn">Школа</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'about' })">О нас</a>
               <a @click="$router.push({ name: 'teachers' })">Сотрудники</a>
               <a @click="$router.push({ name: 'education' })">Учебно-воспитательная работа</a>
               <a @click="$router.push({ name: 'methods' })">Методическая служба</a>
               <a @click="$router.push({ name: 'educat-teach' })">Воспитательная работа</a>
               <a @click="$router.push({ name: 'excellens' })">Гордимся</a>
               <a @click="$router.push({ name: 'process' })">Учебный процесс</a>
               <a @click="$router.push({ name: 'library' })">Информационно-библиотечная служба</a>
               <a @click="$router.push({ name: 'psychology' })">Социально-психологическая служба</a>
            </div>
         </div>
         <a @click="$router.push({ name: 'tidings' })">Новости</a>
         <div class="subnav">
            <button class="subnavbtn">Ученикам</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'parlament' })">ШСУ</a>
               <a @click="$router.push({ name: 'timetable' })">Расписание</a>
               <a @click="$router.push({ name: 'interest' })">Кружки и секций</a>
               <a @click="$router.push({ name: 'useful' })">Полезная информация</a>
            </div>
         </div> 
         <div class="subnav">
            <button class="subnavbtn">Родителям</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'for-parents' })">Информация для родителей</a>
               <a @click="$router.push({ name: 'shape' })">Школьная форма</a>
               <a @click="$router.push({ name: 'acceptance' })">О приёме в школу</a>
               <a @click="$router.push({ name: 'association' })">Общественное объединение</a>
            </div>
         </div> 
         <div class="subnav">
            <button class="subnavbtn">Ещё</button>
            <div class="subnav-content">
               <a @click="$router.push({ name: 'board' })">Попечительский совет</a>
               <a @click="$router.push({ name: 'schedule' })">Дистанционное обучение</a>
               <a @click="$router.push({ name: 'contacts' })">Контакты</a>
               <a @click="$router.push({ name: 'videos' })">Видеогалерея</a>
               <a @click="$router.push({ name: 'expensive' })">Электронный дневник</a>
            </div>
         </div>

         <div class="langs">
            <button class="lang-btn">
               <img src="../assets/images/kg.png" alt="kyrgyz" class="lang-img">
            </button>
            <button class="lang-btn">
               <img src="../assets/images/ru.png" alt="russian" class="lang-img">
            </button>
         </div>

         </div>
            
         </transition>
      </div>



  </div>
  
</nav>
</template>

<script>
export default {

   el: '#menu',
   data () {
      return {
         show: false
      }
   }


}
</script>

<style scoped>

.navbar {
   overflow: hidden;
   background-color: #5E4494; 
}

.navbar a {
   display: flex;
   align-items: center;
   float: left;
   font-size: 16px;
   color: white;
   text-align: center;
   padding: 14px 16px;
   text-decoration: none;
}

.navbar a, .subnav {
   box-sizing: border-box;
   height: 50px;
}

.subnav {
   float: left;
   overflow: hidden;
}

.link, .subnavbtn {
   padding: 15px;
}

.subnav .subnavbtn {
   font-size: 16px;  
   border: none;
   outline: none;
   color: white;
   background-color: inherit;
   margin: 0;
}

.navbar a:hover, .subnav:hover .subnavbtn {
   background-color: #6610f2;
}

.subnav-content {
   display: none;
   position: absolute;
   padding: 0 20px;
   background-color: #343a40;
   max-width: 100%;
   z-index: 1;
}

.subnav-content a {
   float: left;
   color: white;
   text-decoration: none;
}

.subnav-content a:hover {
   background-color: #eee;
   color: black;
}

.subnav:hover .subnav-content {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
}

.langs {
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   padding-top: 11px;
   margin-left: 15px;
}

.lang-btn {
   cursor: pointer;
   border: none;
   background: none;
}

@media (min-width: 580px){
   .mobile {
      display: none;
   }
}

@media (max-width: 580px){
   .desc {
      display: none;
   }
   .mobile {
      display: block;
      color: #fff;
   }
   .subnav-content {
      width: 75%;
   }
   .subnav-content> a {
      margin: 10px;
   }
   .langs {
      margin-top: auto;
   }
   .mobile-items a {
      width: 367.8px;
      height: 50px;
      padding: 15px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
   }
   .subnav-content a, .mobile-items a {
      max-width: 70%;
   }
}

.mobile-logo {
   width: 180px;
   height: 180px;
   margin: 0 auto;
   border-radius: 150px;
}

.mobile-btn {
   display: flex;
   margin-right: 15px;
   margin-left: auto;
   background: none;
   border: none;
}

.mobile-items {
   position: fixed;
   overflow-y: auto;
   left: 0;
   top: 0;
   z-index: 9999;
   display: flex;
   flex-direction: column;
   background-color: #343a40;
   padding: 5px 10px;
   width: 75%;
   height: 100vh;
}

#menu {
   padding: 5px 0;
   background-color: #5E4494;
}

.mobile-btn {
   color: #fff;
   transition: all .3s;
   outline: none;
   padding: 5px;
}

.mobile-btn:hover {
   background-color: #6f42c1;
}

@media (max-width: 370px){
   .mobile-items {
      width: 70%;
   }
   .subnav-content a, .mobile-items a {
      max-width: 65%;
   }
}

</style>