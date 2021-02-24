<!--次回は文字制限から-->
<template>
  <div class="signup">
        <form @submit.prevent="addUser"><!--kokoni-->
   <div class="allSignup">
   <h2>会員情報入力</h2>
 
   <h4>ニックネーム<span class="mustSpan">必須</span></h4> 
   <input class="loginInput" v-model="user_name" placeholder="（例）メルカリ太郎">
     <h4>ユーザーID<span class="mustSpan">必須</span></h4>
    <input class="loginInput" v-model="user_id" placeholder="ユーザーIDを入力してください。">

   <h4>メールアドレス<span class="mustSpan">必須</span></h4>
<input class="loginInput" v-model="email" placeholder="PC・携帯どちらでも可" @input="regExpEmail(email)" :notes="emailErrorText">
   <h4>パスワード<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="password" :type="isPasswordDisplay ? 'text' : 'password'" placeholder="7文字以上の半角英数字" minlength="7"><!--ここは正規表現を使いたい-->
  <br>

  <p v-if="isPasswordDisplay">{{password}}</p>
  <br>
  <h4>電話番号<span class="mustSpan">必須</span></h4>
  <input class="loginInput" v-model="tel" placeholder="電話番号を入力してください" @input="regExpCall(tel)" :notes="telErrorText"> 
    <br>
  <h4>ユーザー紹介文<span class="mustSpan">必須</span></h4>
    <input class="userIntroduce" v-model="introduction" placeholder="紹介文を入力してください。" maxlength="200">
    <br>
  <button class="signupButton2" @click="addUser">新規作成</button>
  </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      isPasswordDisplay : false,
      errors : [],
      emailError:false,
      telError : false,
      email : "",
      password : "",
      user_id : "",
      user_name : "",
      tel : "",
      introduction : "",
      avatar : "", //userのアイコンを作る
      del : "",//未退会=0 退会=1
    }
  },
  methods:{
    regExpEmail(email){
      const regEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      regEmail.test(email) ? this.emailError = false : this.emailError = true //emailErrorの初期値はfalseだから
    },
    regExpCall(tel){
     const regCall =/^0\d{1,4}-\d{1,4}-\d{3,4}$/
     regCall.test(tel)?this.telError = false : this.telError = true
    },
    changePasswordDisplay(){
      this.isPasswordDisplay = !this.isPasswordDisplay
    },
    addUser(){
                this.errors = {}
                /*const self = this*/
      const url = "http://localhost:3000/User/"
      const params = {
        name : this.user_name,
        password : this.password,
        email : this.email,
        id : this.user_id,
        tel : this.tel,
        introduction : this.introduction,
        avatar : this.avatar,
        
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
    },
    avatarAddButton(){

    }
    
  },
  computed:{
    emailErrorText(){
      return this.emailError ? '無効なメールアドレス' :''
    },
    telErrorText(){
      return this.telError ? '無効な電話番号' :''
    }
  }
}
</script>

<style>
.allSignup{
  text-align:center;
}
.userIntroduce{
  padding-right:330px;
  padding-bottom:50px;
}
.mustSpan{
  color:white;
  background-color:red;
}
.signupButton2{
  margin-top:50px;
  margin-bottom:100px;
  width:500px;
    height:40px;
    background-color:#FF0000;
    color:white;
    border-radius:10px;
}
.avatar{
   margin-top:50px;
   width:200px;
   height:40px;
}

</style>