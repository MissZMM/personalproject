import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false;
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;

const store = new Vuex.Store({
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {
        lodingToken (state, token) {
            state.token += token;
        },
        loadingUserInfo (state, userInfo) {
            state.userInfo = userInfo;
        }
    }
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
