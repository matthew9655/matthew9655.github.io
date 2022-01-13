<template>
  <div id="app">
    <Header/>
    <About/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
