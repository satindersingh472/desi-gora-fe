<template>
    <div>
        <mobile-navbar
      v-if="$mq === 'mobile' || $mq === 'tablet' || $mq === 'laptop'"
    ></mobile-navbar>
    <desktop-navbar v-if="$mq === 'desktop'"></desktop-navbar>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>