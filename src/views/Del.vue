<template>
  <div id="del">
       <form @submit.prevent="Signin">
    <div class="allDel">
   <input  class="delInput" v-model = "mailValue" placeholder = "メールアドレス"  @input="regExp(value)"> 
   <div v-text="errors.mailValue" v-if="errors.mailValue">メールアドレスを入力してください</div>
   <br>
   <input  class="delInput" v-model = "passwordValue" placeholder = "パスワード">
   <div v-text="errors.passwordValue" v-if="errors.passwordValue">パスワードを入力してください</div>
   <br>
   <button class="delButton"  @click="Del">アカウントを削除</button > 
  </div>
       </form>
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
            Del(){
                this.errors = {}
                /*const self = this*/
      const url = "http://localhost:3001/User/del/1"
      const params = {
        name : this.user.name,
        password : this.user.password,
        email : this.user.email
      }
      
      axios.post(url,params)
      .then(() =>
       {
        location.href = '/home'
      })
      .catch(
        /*err**/() => {
          /*const responseErrors = err.response.data.errors
          const errors = {}
          for(let key in responseErrors){
              errors[key] = responseErrors[key][0]}*/
          
          
          alert("エラー")
          /*self.errors = errors*/
        }
      )
    }
     }
 }
</script>

<style>
.allDel{
  text-align: center;
}
.delButton {
    margin-bottom:50px;
     width:500px;
    height:40px;
}

.delButton{
    width:500px;
    height:40px;
}

.delInput{
    box-sizing: border-box;
    width:500px;
    height:40px;
    margin-bottom:30px;
}
.delButton1{
     width:500px;
    height:40px;
    color:white;
    background-color:#1E90FF;
    border-radius:10px;
    margin-bottom:50px;
}


</style>