<template>
  <div id="papers">
    <Options/>
    <div id="main-box">
        <!-- <p id="type-header">Internships</p>
        <div id="paper-box" v-for="internship in internships" :key="internship.title">
          <p id="bold">{{ internship.title }}</p>
          <ul> <li> {{internship.description}} </li> </ul>
          <br/>
        </div> -->

        <p id="type-header">Projects</p>
        <div id="paper-box" v-for="project in projects" :key="project.title">
          <a v-if="project.link !== ''" id="sublink" target="_blank" :href="project.link">{{ project.title }}</a>
          <p v-if="project.link ===''" id="bold">{{ project.title }}</p>
          <ul>
            <li>{{ project.description1 }}</li>
            <li v-if="project.description2 !== ''"> {{ project.description2 }}</li>
          </ul>
          <br/>
        </div>

        <p id="type-header">Extracurriculars</p>
        <div id="paper-box" v-for="extra in extracurriculars" :key="extra.title">
          <a v-if="extra.link !== ''" id="sublink" target="_blank" :href="extra.link">{{ extra.title }}</a>
          <p v-if="extra.link ===''" id="bold">{{ extra.title }}</p>
          <ul>
            <li>{{ extra.description1 }}</li>
            <li v-if="extra.description2 !== ''"> {{ extra.description2 }}</li>
          </ul> 
        </div>
        <br/>
    </div>
  </div>
</template>

<script>

import Options from '../components/Options.vue';
import internshipsTexts from '@/texts/internshipsTexts.js';
import projectsTexts from '@/texts/projectsTexts.js';
import extracurricularTexts from '@/texts/extracurricularTexts.js';

export default {
  name: 'ExtrasView',
  components: {
    Options,
  },
  data() {
    return {
        projects: projectsTexts,
        internships: internshipsTexts,
        extracurriculars: extracurricularTexts,
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
    width: 50%;
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
    color: #265396;
    text-align: left;
    font-weight: bold;
}
#note {
    text-align: left;
}
#bold {
  font-weight: bold;
  text-align: left;
}

#sublink {
    height: 100%;
    cursor: pointer;
    font-weight: bold;
}

</style>