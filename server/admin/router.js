import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {path: '/admin', component: require('./components/about')},
    {path: '/admin/blog', component: require('./components/blog')},
    {path: '/admin/works', component: require('./components/works')},
];

export default new VueRouter({routes, mode: 'history'});