<template>
  <div id="app">
      <Header></Header>
      <Nav></Nav>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
     Header,
     Footer,
     Nav,
  },
}
</script>
