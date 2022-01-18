import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    concatImgUrl: str => require('@/assets/' + str)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
