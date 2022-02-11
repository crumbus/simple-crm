/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import vuetify from './src/plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import "vue-material-design-icons/styles.css";
import "@mdi/font/css/materialdesignicons.min.css";
import VueMaterial from "vue-material";
import VueCookie from "vue-cookie";
import { routes } from './src/routes';

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('app', require('./components/App.vue').default);
// Vue.component('test-component', require('./components/ExampleComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

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

const app = new Vue({
    vuetify,
    el: '#app',
    router
});
