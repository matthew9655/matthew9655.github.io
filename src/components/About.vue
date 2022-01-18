<template>
  <div id="main-box">
    <img id="image" src="../assets/face.jpg">
    <div id="name">{{ texts.name }}</div>
    <div id="about">{{ texts.about1 }}</div>
    <br/>
    <div id="about">{{ texts.about2 }}</div>
    <br/>
    <div id="about">{{ texts.about3 }}</div>

  </div>
</template>

<script>

import texts from '../texts.js';

export default {
    name: 'About',
    data() {
        return {
            texts: texts,
        };
    },
};

</script>

<style scoped>
#main-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 25%;
    margin-bottom: 40px;
}
#image {
    border-radius: 50%;
    width: 25%;
}
#name {
    width: 25%;
    height: 20%;
    font-size: 30px;
    margin-bottom: 15px;
}
#about {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>