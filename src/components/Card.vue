<template>
  <div id="main-card">
      <img id="image" :src="concatImgUrl(imageUrl)">
      <div id="text">
          {{ text }}
      </div>
  </div>
</template>

<script>

import texts from '../texts.js';

export default {
    name: 'Card',
    data() {
        return {
            texts: texts,
        };
    },
    props: {
        imageUrl: String, 
        text: String,
    }
};

</script>

<style scoped>
#main-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 5%;
    margin: 2% 0 2% 0;
}
#image {
    border-radius: 10%;
    flex-grow: 1;
    height: 15%;
    width: 15%;
}
#text {
    flex-grow: 3;
    font-size: 18px;
}
</style>