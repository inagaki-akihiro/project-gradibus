<template>
  <div id="avatar">
<el-upload
  class="upload-demo"
  ref="upload"
  action="http://localhost3000/"
  :on-change="onChange"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">select file</el-button>
  <el-button @click="upload()"></el-button>
  <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button>-->
  <!--<div>
    <img :src=>
  </div-->>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
</div>
</template>

<script>
import firebase from 'firebase'
import '../firebase/firebase'

export default {
  data(){
    return{

    }
  },
methods: {
  /*submitUpload() {
    this.$refs.upload.submit();
  }
  ,*/
   upload(file,fileList){
     this.file = file
      const imageURL = `tmp/${fileList}`
    return  firebase.storage().ref().child(imageURL).put(file,
      function(error) {
        if (error) {
          // The write failed...
          alert('画像のアップロードに失敗しました');
          console.log(error);
        } else {
          console.log("Image file saved successfully!")
        }
      })
    
  },
  onChange(file, fileList) {
    
    
    // ファイル名をコンソールへ出力
    this.upload(file,fileList)
   
  },}
}


</script>
<style>

</style>