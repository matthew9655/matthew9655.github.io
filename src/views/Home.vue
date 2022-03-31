<template>
  <div class="home">
    <Header/>
    <About/>
    <Papers/>
    <Projects/>
    <Extras/>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Papers from '../components/Papers.vue';
import Projects from '../components/Projects.vue';
import Extras from '../components/Extras.vue';

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Papers,
    Projects,
    Extras,
  }
}
</script>

<style scoped>
.home {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
