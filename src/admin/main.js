import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { store } from './store';

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: function render(h) {
        return h(App);
    },
});