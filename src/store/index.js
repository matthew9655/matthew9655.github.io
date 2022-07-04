import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            sliderState: 'normal',
            backgroundColorHex: '#FCF6F5FF',
            highlightWordColorHex: '#89ABE3FF',
            textWordColorHex: '#000000',
        }
    },
    getters: {
        getSliderState(state) {
            return state.sliderState;
        },
        getBackgroundColor(state) {
            return state.backgroundColorHex;
        },
        getHighlightWordColor(state) {
            return state.highlightWordColorHex;
        },
        getTextWordColor(state) {
            return state.textWordColorHex;
        },
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
        updateTextWordColor (state, newColor) {
            state.textWordColorHex = newColor;
        },
        updatehighlightWordColorHex (state, newColor) {
            state.highlightWordColorHex = newColor;
        }
    },
})

export default store;