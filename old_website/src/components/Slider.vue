<template>
  <div id="main-header">
    <vue3-slider 
    v-model="value"
    width="200px"
    track-color="#89ABE3FF"
    color="#D3D3D3"
    step="100"
    sticky="true"></vue3-slider>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import slider from 'vue3-slider';

export default {
    name: 'Slider',
    components: {
        "vue3-slider": slider,
    },
    data: function() {
        return {
            value: 0,
        }
    },
    // getSliderState(state) {
    //         return state.sliderState;
    //     },
    //     getBackgroundColor(state) {
    //         return state.backgroundColorHex;
    //     },
    //     getHighlightWordColor(state) {
    //         return state.highlightWordColorHex;
    //     },
    //     getTextWordColor(state) {
    //         return state.textWordColorHex;
    //     },
    computed: {
        ...mapGetters({
            sliderState: 'getSliderState',
            backgroundColorHex: 'getBackgroundColor',
            textWordColor: 'getTextWordColor',
            highlightWordHex: 'getHighlightWord',
        }),
        ...mapMutations({
            
        }),
        changeColorScheme() {
            if (this.value === 100) {
                console.log('color change here');
                return null;
            }
            return null;
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
#slider {
    width: 100px;
}
#sub-header {
    margin: 0px 10px 0px 10px;
    height: 100%;
    cursor: pointer;
    color: #89ABE3FF;
}
</style>