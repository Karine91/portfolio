import Vue from 'vue';
import Vuex from 'vuex';
import VueResourse from 'vue-resource';


Vue.use(Vuex);
Vue.use(VueResourse);

Vue.http.options.root = 'http://localhost:3000';

import skills from './modules/skills';
import posts from './modules/posts';
import works from './modules/works';

export const store = new Vuex.Store({
    getters: {
        $http: ()=>(VueResourse),
    },
    modules: {
       skills,
       posts, 
       works,
    },
});