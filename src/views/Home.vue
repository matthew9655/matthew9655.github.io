<template>
  <div class="home">
    <Header/>
    <About/>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import About from '../components/About.vue';

export default {
  name: 'Home',
  components: {
    Header,
    About,
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
