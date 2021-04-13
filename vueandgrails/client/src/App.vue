<template>
  <div id="app">
    <div class="header-front-page">
      <Header></Header>
    </div>
    <router-view/>
    <!-- <Welcome></Welcome> -->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style scoped>
.header-front-page{
  text-align: center;
}
</style>
