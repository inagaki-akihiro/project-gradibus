<template>
  <div class="signup">
   <h2>会員情報入力</h2>

   <h4>ニックネーム<span class="mustSpan">必須</span></h4> 
<form @submit.prevent="submit">
   <input class="loginInput" v-model="user.name" placeholder="（例）メルカリ太郎">

   <h4>メールアドレス<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="user.email" placeholder="PC・携帯どちらでも可">

   <h4>パスワード<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="user.password" placeholder="7文字以上の半角英数字">
  <br>
  <input class="checkbox" type="checkbox">
  <span>パスワードを表示する</span>
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
      user : {
        //error : [],
        name : "",
        email :"",
        password : ""
      }
    }
  },
  methods:{
    addUser(){
      const self = this
      //const url = ここにAjax通信をした値を格納するurlを入れる
      
      axios.post('url',this.user.name,this.user.email,this.user.password)
      .then(res => {
        if(res.data.result){
          //メール送信完了画面
        }else{
          self.errors = res.data.error
        }
      })
      //.catch(
      //  err => {
          //例外処理を行う
      //  }
      //)
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