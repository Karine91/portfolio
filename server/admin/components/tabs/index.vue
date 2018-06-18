<template lang="pug">
  .tabs
    ul.list
        li.item(v-for="tab in tabs")
            router-link(
                :to="tab.href"
            ).link {{tab.name}}
</template>
<script>
export default {
  data(){
      return{
          tabs: [
              {name: 'Обо мне', href: '/admin'},
              {name: 'Блог', href: '/admin/blog'},
              {name: 'Мои работы',  href: '/admin/works'}]
      }
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>

