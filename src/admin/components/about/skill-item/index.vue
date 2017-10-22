<template lang='pug'>
    tr.skill-row
        td.skill-cell.skill-name {{skill.name}}
        td.skill-cell
            input(type="text" 
             v-model="newSkillPercent" 
             @change="changeSkillPercent(skill.id)"
             :class="{error: validation.hasError('newSkillPercent')}"
             ).input.skill-input
        td.skill-cell %
        td.skill-cell
            div.error-message {{validation.firstError('newSkillPercent')}}
        td.skill-cell
            appButton(
                name="Удалить"
                @click.native="removeSkill(skill.id)")
                          
</template>
<script>
import {Validator} from 'simple-vue-validator';

export default {
    mixins: [require('simple-vue-validator').mixin],
    data(){
        return {
            'newSkillPercent': this.skill.percents,
        }
    },
     validators:{
        'newSkillPercent'(value){
            return Validator.value(value).required('Поле не может быть пустым!').integer('Введите число');
        }
    },
    props: {
        skill: Object
    },
    methods:{
       removeSkill(id){
           console.log("wtf");
           this.$emit('removeSkill', id);
       },
       changeSkillPercent(id){
           let params={id, percent: this.newSkillPercent};
           this.$emit('changeSkillPercent', params);
       } 
    },
    components:{
        appButton: require('../../button'),
    }
}
</script>
<style lang="scss" src='./style.scss' scoped></style>