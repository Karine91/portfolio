<template lang='pug'>
    tr.skill-row
        td.skill-cell.skill-name {{skill.name}}
        td.skill-cell
            input(type="text"  v-model="newSkillPercent" @change="changeSkillPercent(skill.id)").input.skill-input
        td.skill-cell %
        td.skill-cell
            button.button(
                type="button" 
                @click="removeSkill(skill.id)"
                ) Удалить
             
</template>
<script>
export default {
    data(){
        return {
            'newSkillPercent': this.skill.percents,
        }
    },
    props: {
        skill: Object
    },
    methods:{
       removeSkill(id){
           this.$emit('removeSkill', id);
       },
       changeSkillPercent(id){
           let params={id, percent: this.newSkillPercent};
           this.$emit('changeSkillPercent', params);
       } 
    },
}
</script>
<style lang="scss" src='./style.scss' scoped></style>