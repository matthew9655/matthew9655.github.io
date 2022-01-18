<template>
  <div id="main-projects-box">
    <div id="header">Projects</div>
    <div id="projects">
        <Card :imageUrl="'face.jpg'" :text="'this is project 1'"/>
    </div>
  </div>
</template>

<script>

import texts from '../texts.js';
import Card from './Card.vue';

export default {
    name: 'Projects',
    data() {
        return {
            texts: texts,
        };
    },
    components: {
        Card,
    },
};

</script>

<style scoped>
#main-projects-box {
    width: 50%;
    height: 25%;
}
#header {
    font-size: 30px;
    font-weight: bold;
    display: flex;
}
#projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
}
</style>