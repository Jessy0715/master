import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-vue.js';
import './reset.css';
import './custom.scss'; //BS v4.6
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
