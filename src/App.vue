 <template>
 
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">新規作成</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/withdraw">退会</router-link>
    <router-link to="/categoryrouter">カテゴリーから探す</router-link>
    <router-view/>
  </div>
    
    
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
