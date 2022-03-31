<template>
  <div id="main-papers-box">
    <div id="paper-header">Papers</div>
    <div id="papers">
        <Card :imageUrl="'face.jpg'" :text="'this is paper 1'"/>
    </div>
  </div>
</template>

<script>

import texts from '../texts/texts.js';
import Card from './Card.vue';

export default {
    name: 'Papers',
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
#main-papers-box {
    width: 50%;
    height: 25%;
}
#paper-header {
    font-size: 30px;
    font-weight: bold;
    display: flex;

}
#papers{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
}
</style>