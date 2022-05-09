<template>
  <div id="papers">
    <Header/>
    <div id="main-box">
        <div id="paper-box" v-for="paper in texts" :key="paper.two">
        <p> {{ paper.one }}<span class="emphasized"> {{ paper.two }}</span> {{ paper.three }}
        <a id="sub-header" target="_blank" :href=paper.link>{{ paper.link }}</a></p>
        </div>
        <br/>
    </div>
    <p id="note">This list is a little sparse right now but with a lot of hard work and some luck, it will grow.</p>

  </div>
</template>

<script>

import Header from '../components/Header.vue';
import papersTexts from '@/texts/papersTexts.js';

export default {
  name: 'Papers',
  components: {
    Header,
  },
  data() {
    return {
        texts: papersTexts,
    };
  },
}
</script>

<style scoped>
#papers {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#main-box{
    width: 38%;
    height: 30%;
}
#paper-box {
    text-align: left;
}
.emphasized { 
    font-style: italic; 
}
#sub-header {
    height: 100%;
    cursor: pointer;
    color: #89ABE3FF;
    text-align: left;
}
#note {
    text-align: left;
}

</style>