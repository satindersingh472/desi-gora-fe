<template>
    <div>
        <mobile-nav-bar
      v-if="$mq === 'mobile' || $mq === 'tablet' || $mq === 'laptop'"
    ></mobile-nav-bar>
    <desktop-nav-bar v-if="$mq === 'desktop'"></desktop-nav-bar>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>