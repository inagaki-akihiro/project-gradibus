<template>
<div id="categoryrouter">
    <p>カテゴリー一覧</p>
    <!--サーバーからcategoryをもらってそれをボタン化する。-->
        <button class="categoryButton" v-for="(user,index) in users" :key="index">
            {{user.name}}
        </button>
    
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
        
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.users = res.data)
            .catch(err => alert(err))
        
    }
}
</script>
<style >
  .categoryButton{
      border-radius:5px;
      margin-right:20px;
      margin-top:30px;
  }
</style>