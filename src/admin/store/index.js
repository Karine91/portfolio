import Vue from 'vue';
import Vuex from 'vuex';
import VueResourse from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResourse);

import skills from './modules/skills';
import posts from './modules/posts';
import works from './modules/works';

export var store = new Vuex.Store({
    getters: {
        $http: function $http() {
            return VueResourse;
        },
    },
    modules: {
        skills: skills,
        posts: posts,
        works: works,
    },
});