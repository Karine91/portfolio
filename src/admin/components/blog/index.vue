<template lang='pug'>
    .blog
        h1.title Страница "Блог"
        .form
            .form-title Добавить запись
            form(name="blog")
                input(type="text" placeholder="Название" v-model="fields.name").input
                input(type="date" placeholder="Дата" v-model="fields.date").input
                textarea(type="text" placeholder="Содержание" v-model="fields.text").input.textarea
        appButton(name="Добавить" @click.native="addPost").button-bottom
                
        .table
            table.posts
            tr(v-for="(post, index) in posts")
                td {{post.title}}
                td {{post.date}}
                td {{post.text}}
</template>
<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    data(){
        return {
            fields:{
                name: "",
                date: '',
                text: "",
            }
        }
    },
    methods: {
        ...mapMutations(['addBlogPost']),
        addPost(){
           let fieldsData = Object.assign({}, this.fields);
           this.addBlogPost(fieldsData);
           this.fields = {name: '', date: '', text: ''}
        }
    },
    computed: {
    ...mapGetters(['posts'])
    },
    components:{
        appButton: require('../button')
    }
}
</script>
<style lang='scss' src='./style.scss' scoped></style>