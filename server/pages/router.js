import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {path: '/', component: require('./components/about')},
    {path: '/blog', component: require('./components/blog')}
]

export default new VueRouter({routes, mode: 'history'});