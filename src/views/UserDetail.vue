<template>
<div id="userdetail">
 <router-link to="/userdetail"><button>新規作成</button></router-link>
<!--ユーザー詳細ページ-->
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return{
          users : []
      }
  },
  mounted(){
      axios.get("http://localhost:3000/User/")
      .then(response=> this.users = response.data)
      .catch(err => alert(err))

  }
}
</script>

<style>

</style>