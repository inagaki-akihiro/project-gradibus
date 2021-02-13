<template>
  <div id="login">
    <div class="allLogin">
      <p>アカウントをお持ちでない方はこちら</p>
    <router-link to="/signup"><button class="signupButton1">新規作成</button></router-link>
    <br>

     
   <input  class="loginInput" v-model = "mailValue" placeholder = "メールアドレス"  @input="regExp(value)"> 
   <div v-text="errors.mailValue" v-if="errors.mailValue">メールアドレスを入力してください</div>
   <br>
   <input  class="loginInput" v-model = "passwordValue" placeholder = "パスワード">
   <div v-text="errors.passwordValue" v-if="errors.passwordValue">パスワードを入力してください</div>
   <br>
   <button class="loginButton"  @click="Signin">ログイン</button > 
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            mailValue : "",
            passwordValue : "",
            errors:{}
            }},
         methods:{
            Signin(){
                this.errors = {}
                const self = this
      const url = "https://localhost:3000"
      const params = {
        name : this.user.name,
        password : this.user.password,
        email : this.user.email
      }
      
      axios.post(url,params)
      .then(//res =>
       {
        //location.href = '/home'
      })
      .catch(
        err => {
          const responseErrors = err.response.data.errors
          const errors = {}
          for(let key in responseErrors){
              errors[key] = responseErrors[key][0]
          }
          self.errors = errors
        }
      )
    }
     }
 }
</script>

<style>
.allLogin{
  text-align: center;
}
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
.signupButton1{
     width:500px;
    height:40px;
    color:white;
    background-color:#1E90FF;
    border-radius:10px;
    margin-bottom:50px;
}


</style>