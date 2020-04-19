
require('./bootstrap');

import router from './routes/routers'
import store from './vuex/store'

window.Vue = require('vue');

const app = new Vue({
    router,
    store,
    el: '#app'
});
