import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store.js'
import { mapActions } from 'vuex'


Vue.use(VueAxios, axios)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  render: h =>h(App),
  methods: {
    ...mapActions([
      'read_all'
    ])
  },
  created: function (){
    this.read_all();
    console.log('yo ')
    
}
})
