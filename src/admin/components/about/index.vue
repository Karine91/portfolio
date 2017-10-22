<template lang="pug">
  .about
    h1.title Страница "Обо мне"
    .about-content
        .skills-list(v-for="(skillType, index) in skillsTypes")
            skills-list(
                :skills="skills" 
                :skillType="skillType"
                :key="index",
                @addSkill ="addSkill", 
                @removeSkill ="removeSkill",
                @changeSkillPercent="changeSkillPercent", 
            ) 


</template>
<script>

import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    data(){
        return{
            skillsTypes: ['Frontend', 'Backend', 'Workflow']
        }
    },
    computed:{
        ...mapGetters(['skills'])
    },
    created(){
        this.fetchSkills();
    },
    methods: {
        ...mapActions(['fetchSkills']),
        ...mapMutations(['addNewSkill', 'removeSavedSkill', 'changePercentData']),
        addSkill(skill){
           this.addNewSkill(skill);
        },
        removeSkill(id){
            this.removeSavedSkill(id);
        },
        changeSkillPercent(params){
            params.percent = parseInt(params.percent)
            this.changePercentData(params);
        }
    },
    components: {
        skillsList: require('./skills-list')
    }
}
</script>
<style lang="scss" src="./style.scss" scoped></style>
