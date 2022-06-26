import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            sliderState: 'normal',
            backgroundColorHex: '#000000',
            wordColorHex: '#FFFFFF',
        }
    },
    mutations: {
        setSliderState (state, newState) {
            if (newState === 'dark') {
                state.sliderState = 'dark';
            } else if (newState === 'colorblind') {
                state.sliderState = 'colorBlind';
            } else {
                state.sliderState = 'normal';
            }
        },
        udpateBackgroundColor (state, newColor) {
            state.backgroundColorHex = newColor;
        },
        updateWordColor (state, newColor) {
            state.wordColorHex = newColor;
        }
    },
})

export default store;