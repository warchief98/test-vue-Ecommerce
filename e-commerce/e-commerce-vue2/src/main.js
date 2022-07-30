import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import '../src/utils/setAxiosHeader'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    axios,
    VueAxios,
    render: h => h(App)
}).$mount('#app')