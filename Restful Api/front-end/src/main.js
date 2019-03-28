import Vue from 'vue'
import App from './App.vue'

// PACKAGES
import VueResource from 'vue-resource';
Vue.use(VueResource)

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// Components
import Posts from './components/Posts'

Vue.component('app-posts', Posts)

new Vue({
  el: '#app',
  render: h => h(App)
})
