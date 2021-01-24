import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SocialSharing from 'vue-social-sharing'
import VueLazyLoad from 'vue-lazyload'
import JwPagination from 'jw-vue-pagination';
import router from './router'

// use library
library.add(fas)
// Reg. component
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(SocialSharing);

Vue.use(VueLazyLoad)

Vue.component('jw-pagination', JwPagination);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
