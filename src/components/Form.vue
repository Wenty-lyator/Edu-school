<template>
   <form method="post" action="" id="add_comment" class="card">
         <div class="card-header">Новый комментарий</div>
         <div class="card-body">
            <div class="row extended">
               <div>
                  <input name="name" class="form-control" placeholder="Ваше имя" required>
               </div>
               <div>
                  <textarea name="comment" class="form-control" rows="3" placeholder="Комментарий" required></textarea>
               </div>
               <div>
                  <img class="card-img" src="../assets/images/numbers.jpg" alt="num">
               </div>
               <div>
                  <input name="captcha" class="form-control" placeholder="Код с картинки" required>
               </div>
            </div>
         </div>
         <div class="card-footer">
            <input type="hidden" name="action" value="add_comment">
            <input type="hidden" name="post_id" value="2029">
            <input type="hidden" name="referer" value="index.html">
            <button class="btn btn-primary">Отправить</button>
         </div>
      </form>
</template>

<script>
   export default {
   }
</script>

<style scoped>

   .card-img {
      margin-left: 35px;
   }

   .form-control {
      display: block;
      width: 90%;
      height: calc(1.5em + .75rem + 2px);
      margin: 10px auto;
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
   }

   .card {
      max-width: 980px;
      min-width: 50%;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      background-clip: border-box;
      border-radius: 0;
      border: 1px solid rgba(0,0,0,.125);
   }

   .card-header {
      padding: 10px 15px;
      border-radius: 0!important;
      background-color: rgba(0,0,0,.03);
      border-bottom: 1px solid rgba(0,0,0,.125);
      line-height: 1.3;
      font-size: 16px;
   }

   .card-body {
      padding: 15px;
   }

   .card-footer {
      padding: 10px 15px;
      border-radius: 0!important;
      background-color: rgba(0,0,0,.03);
      border-top: 1px solid rgba(0,0,0,.125);
   }

   .btn-primary {
      border: 1px solid transparent;
      outline: none;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      font-weight: 400;
      text-align: center;
      padding: .375rem .75rem;
      line-height: 1.5;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

   }

   .btn-primary:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
   }

   textarea { 
      resize: vertical; 
   }


</style>