<template lang='pug'>
     button.button(
                type="button" 
                ) {{name}}
</template>
<script>
export default {
    props: {
        name: String,
    }
}
</script>
<style lang='scss' src='./style.scss' scoped></style>