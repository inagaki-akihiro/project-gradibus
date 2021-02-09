<template>
  <div class="login">
      <p>アカウントをお持ちでない方はこちら</p>
    <router-link to="/signup"><button class="signupButton">新規作成</button></router-link>
    
<!-- ここにvue-routerで新規作成ページを繋ぐ -->
    <div>
    <router-view/>
     </div>
     
   <input  class="loginInput" v-model = "mailValue" placeholder = "メールアドレス">
   <br>
   <input  class="loginInput" v-model = "passwordValue" placeholder = "パスワード">
   <br>
   <button class="loginButton" @click="click">ログイン</button> 
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
.signupButton {
    margin-bottom:50px;
     width:500px;
    height:40px;
}

.loginButton{
    width:500px;
    height:40px;
}

.loginInput{
    box-sizing: border-box;
    width:500px;
    height:40px;
    margin-bottom:30px;
}


</style>
