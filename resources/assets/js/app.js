
require('./bootstrap');

import router from './routes/routers'
import store from './vuex/store'

window.Vue = require('vue');

/*** Components Globais */
Vue.component('example-component', require('./components/ExampleComponent'))

const app = new Vue({
    router,
    store,
    el: '#app'
});
