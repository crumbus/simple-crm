/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './src/store/index.js'
import VueRouter from 'vue-router';
import vuetify from './src/plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import "vue-material-design-icons/styles.css";
import "@mdi/font/css/materialdesignicons.min.css";
import VueMaterial from "vue-material";
import VueCookie from "vue-cookie";
import routes from './src/routes';

require('./bootstrap');

window.Vue = require('vue').default;

//Flash messages register
window.flash = function (message) {
    window.events.$emit('flash', message);
}

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = token;
}
//TODO: fix Axios baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueMaterial);
Vue.use(VueCookie);

Vue.config.productionTip = false;
Vue.config.lang = VueCookie.get("locale") || "en";

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

//Handling Unauthorized Access Cases
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLogged) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
});

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
});
