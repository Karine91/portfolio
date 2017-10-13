import Vue from 'vue';
import Vuex from 'vuex';
import VueResourse from 'vue-resource';


Vue.use(Vuex);
Vue.use(VueResourse);

import skills from './modules/skills';

export const store = new Vuex.Store({
    getters: {
        $http: ()=>(VueResourse)
    },
    modules: {
       skills, 
    }
})