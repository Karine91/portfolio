<template lang='pug'>
    .works 
        h1.title Страница "Мои работы"
        .form
            .form-title Добавить работу
            form(name="works")
                input(type="text" placeholder="Название проекта" v-model="fields.name").input
                input(type="text" placeholder="Технологии" v-model="fields.tech").input
                label.upload
                    input(type="file" @change="getFile($event)").input-file
                    .upload-icon
                    .upload__text Загрузить картинку
                div.error-message {{validation.firstError('fields.file')}}
        appButton(name="Добавить"
        :disabled="!fields.file || validation.hasError('fields.file')"
        @click.native="addWork").button-bottom
        
</template>
<script>
import { Validator } from 'simple-vue-validator'
import { mapActions } from 'vuex'

export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'fields.file': (value) => {
            return Validator.custom(() => {
                if (Validator.isEmpty(value)) return
                const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg',]
                if (!allowedTypes.includes(value.type)) {
                    return 'Недопустимый формат файла, разрешены только .jpg, .jpeg и .png'
                }
            })
        }
    },
    data: function() {
        return {
            fields: {
                name: '',
                tech: '',
                file: null
            }
        }
    },
    methods: {
        ...mapActions('works', ['addNewWork']),
        getFile(event) {
            const file = event.target.files[0];
            this.fields.file = file;
        },
        addWork() {
            this.$validate().then(success => {
                if (!success) return
                let formData = new FormData();
                formData.append('file', this.fields.file, this.fields.file.name);
                formData.append('tech', this.fields.tech);
                formData.append('name', this.fields.name);
                this.addNewWork(formData);
            })
        }
    },
    components:{
        appButton: require('../button')
    }
}
</script>
<style lang='scss' src='./style.scss' scoped></style>