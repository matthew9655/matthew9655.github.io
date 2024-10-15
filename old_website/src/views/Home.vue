<template>
  <div class="home">
    <Options/>
    <About/>
  </div>
</template>

<script>

import Options from '../components/Options.vue';
// import Slider from '../components/Slider.vue';
import About from '../components/About.vue';

export default {
  name: 'HomeView',
  components: {
    Options,
    // Slider,
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
