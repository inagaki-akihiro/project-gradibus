カテゴライズ機能を作成

<template>
    <div id="category">
        
        <button @click="clicked">{{number}}</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            number : 0
        }
    },
    methods:{
        clicked(){
            this.number +=1
        }
    }

}
</script>
<style>

</style>