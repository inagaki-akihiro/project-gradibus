<template>
  <div id="del">
       <form @submit.prevent="Del">

   <button class="delButton"  @click="Del(user.id)">アカウントを削除</button> 
       </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user: [],
            name : "",
            errors:{}

            }},
         methods:{
            Del(id){
               // this.errors = {}
                /*const self = this*/
      const url = "http://localhost:3000/User/del/1"
      axios.delete(url + id)
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