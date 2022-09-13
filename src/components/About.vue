<template>
  <div id="main-box">
    <img id="image" src="../assets/face.jpg">
    <div id="text-box">
        <div id="name">{{ texts.name }}</div>
        <div id="about1box">
            <div>
                {{ texts.about11 }}
                <a id="sublink" target="_blank" :href="texts.link1">Vector Institute</a>
                {{ texts.about12 }}
                <a id="specialsublink" target="_blank" :href="texts.link2">University of Toronto</a>
                {{ texts.about13 }}
            </div>
        </div>
        <br/>
        <div id="about2box">
            <div id="about2text">
                {{ texts.about21 }}
                <a id="sublink" target="_blank" :href="texts.link3">Alán Aspuru-Guzik</a>
                {{ texts.about22 }}
                <a id="sublink" target="_blank" :href="texts.link4">Modiface</a>
                {{ texts.about23 }}
                <br/>
            </div>
        </div>
        <div id="socials">
            <a id="link" target="_blank" href="https://twitter.com/matt_choi_cs">Twitter</a>
            <a id="link" target="_blank" href="https://github.com/matthew9655">Github</a>
            <a id="link" target="_blank" href="https://www.linkedin.com/in/matthew-choi-623aa0167/">LinkedIn</a>
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
    margin-bottom: 20px;
    color: #89ABE3FF;
}
#about1box {
    height: 50%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
}

#about1text {
    text-align: left;
}

#about2box {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
}

#about2text {
    text-align: left;
}

#socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    margin-top: 20px;
    margin-bottom: 60px;
    right: 5%;
    color: #89ABE3FF;
}
#link {
    margin: 0px 10px 0px 10px;
    height: 100%;
    cursor: pointer;
}
#sublink {
    height: 100%;
    cursor: pointer;
}
#specialsublink {
    height: 100%;
    cursor: pointer;
    margin-right: -3px;
}
</style>