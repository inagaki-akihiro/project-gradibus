<template>
  <div class="login">
      <p>アカウントをお持ちでない方はこちら</p>

　　
　　 <!-- ここにvue-routerで新規作成ページを繋ぐ -->
　　
   <input v-model = "mailValue" placeholder = "メールアドレス">
   <input v-model = "passwordValue" placeholder = "パスワード">
   <button @click="click">ログイン</button> 
  </div>
</template>

<script>
//import axios from 'axios'
export default {
    data(){
        return{
            mailValue : "",
            passwordValue : ""
            }
            },
         methods:{
               click(){
    console.log(1)
                }
     }
 }
</script>

<style>

</style>
