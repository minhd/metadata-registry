/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex'

window.Vue = Vue;
Vue.use(Vuex);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

Vue.prototype.logout = function() {
    this.$store.dispatch('logout').then(this.$router.push('/login'));
};

import store from './store.js';
import router from './router.js';

import App from './pages/App.vue';

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store
});
