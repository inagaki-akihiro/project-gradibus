<template>
  <div class="signup">
   <h2>会員情報入力</h2>

   <h4>ニックネーム<span class="mustSpan">必須</span></h4> 
<form @submit.prevent="submit">
   <input class="loginInput" v-model="user.name" placeholder="（例）メルカリ太郎">

   <h4>メールアドレス<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="user.email" :notes="emailErrorText" @input="regExp" placeholder="PC・携帯どちらでも可">

   <h4>パスワード<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="user.password" placeholder="7文字以上の半角英数字" ><!--ここは正規表現を使いたい-->
  <br>
  <input class="checkbox"  type="checkbox" @click="changePasswordDisplay">
  <span>パスワードを表示する</span>
  <p v-if="isPasswordDisplay">{{user.password}}</p>
  <br>
  <button class="signupButton" @click="addUser">新規作成</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      isPasswordDisplay : false,
      //error : [],
      emailError:false,
      user : {
        name : "",
        email :"",
        password : ""
        
      }
    }
  },
  methods:{
    regExp(email){
      const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      reg.test(email) ? this.emailError = false : this.emailError = true //emailErrorの初期値はfalseだから
    },
    changePasswordDisplay(){
      this.isPasswordDisplay =!this.isPasswordDisplay
    },
    addUser(){
      const self = this
      //const url = ここにAjax通信をした値を格納するurlを入れる
      
      axios.post('url',this.user.name,this.user.email,this.user.password)
      .then(res => {
        if(res.data.result){
          //メール送信完了画面
        }else{
          self.error = res.data.error
        }
      })
      //.catch(
      //  err => {
          //例外処理を行う
      //  }
      //)
    }
  },
  computed:{
    emailErrorText(){
      return this.emailError ? '無効なメールアドレス' :''
    }
  }
}
</script>

<style>
.mustSpan{
  color:white;
  background-color:red;
}
.signupButton{
  margin-top:50px;
  width:500px;
    height:40px;
}

</style>