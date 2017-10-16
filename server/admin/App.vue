<template lang="pug">
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      router-view
</template>

<script>
export default {
  name: 'app',
  data: () => ({
      msg: 'Welcome to Your Vue.js App'

  }),
  components: {
    appHeader: require('./components/header'),
    appTabs: require('./components/tabs')
  }
}
</script>
<style lang="scss" src="./app.scss"></style>
