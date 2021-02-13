<template>
<div id="categoryrouter">
    <p>カテゴリー一覧</p>
    <!--サーバーからcategoryをもらってそれをボタン化する。-->
        <button v-for="(user,index) in users" :key="index">
            {{user.category}}
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
    mounted:{
        addButton(){
            axios.get("https://localhost:3000/")
            .then(res => this.users = res.data)
        }
    }
}
</script>
<style >

</style>