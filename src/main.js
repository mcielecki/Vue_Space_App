import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('#search').addEventListener('keydown', event => {
    if (event.keyCode == 13) {
      document.querySelector('.search-button').click();
    }
  })
});
