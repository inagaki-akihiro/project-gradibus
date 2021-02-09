<template>
  <div class="signup">
   <h2>会員情報入力</h2>

   <h4>ニックネーム<span class="mustSpan">必須</span></h4> 

   <input class="loginInput" v-model="nameInput" placeholder="（例）メルカリ太郎">

   <h4>メールアドレス<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="mailInput" placeholder="PC・携帯どちらでも可">

   <h4>パスワード<span class="mustSpan">必須</span></h4>
   <input class="loginInput" v-model="passwordInput" placeholder="7文字以上の半角英数字">
  <br>
  <input class="checkbox" type="checkbox">
  <span>パスワードを表示する</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.mustSpan{
  color:white;
  background-color:red;
}
.checkbox{
  width:initial;
  height:initial;
}
</style>