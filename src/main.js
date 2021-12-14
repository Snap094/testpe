/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { mainPage } from './assets/js/main-page'
import { header } from './assets/js/header'
require('./assets/js/multiselect');


document.addEventListener('DOMContentLoaded', function() {
  mainPage();
  header();
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

