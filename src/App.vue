<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
export default {
  
  name: 'app',
  components: { Navbar, Footer }
}
</script>

<style>

</style>
