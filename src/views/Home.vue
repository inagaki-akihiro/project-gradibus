<template>
  <div class="home">
    <div>
      <router-link to="/signup"><button>新規作成</button></router-link>
      <router-link to="/login"><button>Login</button></router-link>
      <router-link to="/del"><button>アカウント削除</button></router-link>
    <router-link to="/categoryrouter"><button>カテゴリーから探す</button></router-link>
  </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
