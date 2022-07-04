<template>
  <div id="main-box">
    <img id="image" src="../assets/face.jpg">
    <div id="text-box">
        <div id="name">{{ texts.name }}</div>
        <div id="about1">{{ texts.about1 }}</div>
        <br/>
        <div id="about2">{{ texts.about2 }}</div>
        <br/>
        <div id="main-header">
            <a id="sub-header" target="_blank" href="https://twitter.com/matt_choi_cs">Twitter</a>
            <a id="sub-header" target="_blank" href="https://github.com/matthew9655">Github</a>
        </div>
    </div>
    
  </div>
</template>

<script>

import texts from '../texts/aboutTexts.js';

export default {
    name: 'AboutMe',
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
    width: 70%;
    height: 25%;
    margin-bottom: 40px;
}
#text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
}
#image {
    border-radius: 50%;
    min-width: 140px;
    max-width: 270px;
    width: 30%;
    margin-bottom: 20px;
}
#name {
    width: 100%;
    height: 20%;
    font-size: 35px;
    margin-bottom: 10px;
    color: #89ABE3FF;
}
#about1 {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
}

#about2 {
    height: 50%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
}

#main-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    margin-bottom: 60px;
    right: 5%;
    color: #89ABE3FF;
}
#sub-header {
    margin: 0px 10px 0px 10px;
    height: 100%;
    cursor: pointer;
}
</style>