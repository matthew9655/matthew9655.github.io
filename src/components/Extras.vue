<template>
  <div id="main-extras-box">
    <div id="extras-header">Extras</div>
    <div id="extras">
        <Card :imageUrl="'face.jpg'" :text="'this is extras 1'"/>
    </div>
  </div>
</template>

<script>

import texts from '../texts/texts.js';
import Card from './Card.vue';

export default {
    name: 'Extras',
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
#main-extras-box {
    width: 50%;
    height: 25%;
}
#extras-header {
    font-size: 30px;
    font-weight: bold;
    display: flex;
}
#extras {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
}
</style>