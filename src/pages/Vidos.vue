<template>
   <div class="wrapper">
      <div class="text__content">

         <p class="title">ВИДЕОГАЛЕРЕЯ</p>

         <a href="#" class="subtext">Наша школа УВК 38</a>

         <a href="#" class="subtext">Бала менен туура убакыт кечирүү бөбөктүн жаркын келечеги үчүн өтө керектүү азык</a>

         <p class="text-blue">5-март Ак калпак күнү</p>

         <iframe class="videos" width="560" height="315" src="https://www.youtube.com/embed/LbOyaOVsvUk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

         <a class="subtext" href="https://www.youtube.com/watch?v=PFnr-1njCh0">Конкурс Мистер Увк 38 2019</a>
         
         <a class="subtext" href="https://youtu.be/t8SJt1yXMYI">Психолог Асель Сүйүнбаева: «Батыштын тарбиясын ылгабай кабыл алабыз» / Таң Шоола / НТС</a>
         
         <a class="subtext" href="https://www.youtube.com/watch?v=AIIC3vLT918">Сложно ли быть учителем? | УВК38</a>

         <iframe class="videos" width="560" height="315" src="https://www.youtube.com/embed/PGFCMI1ckdE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

         <div class="share">
            
            <span class="text">Поделиться</span>

            <div class="share__items">

               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>
               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>
               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>
               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>
               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>
               <a href="#" class="share__link">
                  <img src="../assets/images/vk.svg" alt="vk" class="share__img">
               </a>

            </div>

         </div>

         <span class="subtitle">Комментарии</span>

         <div class="shar">

            <span class="text">Комментариев не найдено.</span>

         </div>

         <Form></Form>

      </div>
   </div>
</template>

<script>
   import Form from '../components/Form.vue'
   export default {
      components: 
      {
         Form,
      }
   }
</script>

<style lang="scss" scoped>

   .text-blue {
      font-style: italic;
      font-weight: bolder;
      color: #0000ff;
      font-size: 2rem;
      line-height: 1.2;
   }

   .share {
      text-align: center;
   }

   .share, .shar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 980px;
      padding: 10px;
      border: 1px solid #EEE;
      margin: 10px 0;
		&__items {
         display: flex;
         flex-direction: row;
         justify-content: center;
		}
		&__link {
         margin: 0 2px;
		}
		&__img {
         width: 24px;
         height: 24px;
		}
   }  

   @media (max-width: 620px){
      .videos {
         width: 85%;
         margin: 10px auto;
      }
   }

</style>