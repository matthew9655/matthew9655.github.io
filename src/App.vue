<template>
  <div id="app">
    <Header/>
    <About/>
    <Papers/>
    <Projects/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Papers from './components/Papers.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Papers,
    Projects,
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
