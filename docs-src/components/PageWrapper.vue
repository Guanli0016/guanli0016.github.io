<template>
    <div class='container'>
        <div class='wrapper' :class='layout'>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';

    const props = defineProps<{
        layout: string
    }>()
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
    }
    .wrapper.grid {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(auto-fit, 108px);
        grid-gap: 24px 32px;
        justify-content: center;
    }
    @media (min-width: 768px) {
        .container {
            padding: 32px 32px;
        }
    }
</style>