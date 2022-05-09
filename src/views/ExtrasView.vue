<template>
  <div id="papers">
    <Header/>
    <div id="main-box">
        <p id="type-header">Internships</p>
        <div id="paper-box" v-for="internship in internships" :key="internship.title">
          <p id="bold">{{ internship.title }}</p>
          <ul> <li> {{internship.description}} </li> </ul>
          <br/>
        </div>
        <br/>

        <p id="type-header">Projects</p>
        <div id="paper-box" v-for="project in projects" :key="project.title">
          <p id="bold">{{ project.title }}</p>
          <ul>
            <li>{{ project.description1 }}</li>
            <li v-if="project.description2 !== ''"> {{ project.description2 }}</li>
          </ul> 
        </div>
        <br/>
    </div>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import internshipsTexts from '@/texts/internshipsTexts.js';
import projectsTexts from '@/texts/projectsTexts.js';

export default {
  name: 'Extras',
  components: {
    Header,
  },
  data() {
    return {
        projects: projectsTexts,
        internships: internshipsTexts,
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
#type-header {
    height: 100%;
    color: #89ABE3FF;
    text-align: left;
}
#note {
    text-align: left;
}
#bold {
  font-weight: bold;
  text-align: left;
}

</style>