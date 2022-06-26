<template>
  <div>
    <vue-slider 
        v-model="value" 
        :data="data"
    ></vue-slider>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
    name: 'Slider',
    components: {
        VueSlider,
    },
    data: function() {
        return {
            value: 'normal',
            data: ['dark', 'normal', 'blind']
        }
    }
}
</script>

<style scoped>
#main-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    width: 100%;
    height: 10%;
    margin-bottom: 60px;
    right: 5%;
}
#sub-header {
    margin: 0px 10px 0px 10px;
    height: 100%;
    cursor: pointer;
    color: #89ABE3FF;
}
</style>