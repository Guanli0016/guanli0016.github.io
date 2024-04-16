<template>
    <div class='container'>
        <div class='wrapper'>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    
</script>

<style scoped>
    .container {
        margin: 0 auto;
        padding: 32px 24px;
    }
    .wrapper {
        max-width: calc(var(--vp-layout-max-width) - 64px);
        height: auto;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat( auto-fit, 108px );
        grid-auto-rows: 134px;
        column-gap: 24px;
        row-gap: 32px;
        justify-content: space-around;
    }
    @media (min-width: 768px) {
        .container {
            padding: 32px 32px;
        }
    }
</style>