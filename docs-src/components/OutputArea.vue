<template>
    <div class="output-wrapper" @mouseenter="copyShow = true" @mouseleave="copyShow = false">
        {{ output }}
        <CopyButton class="copy-button" title="复制" :content="output" :show="copyShow"></CopyButton>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    import CopyButton from './ui/CopyButton.vue';

    const copyShow = ref(false);
    
    const props = defineProps<{
        output: string
    }>();
</script>
<style scoped>
    .output-wrapper {
        height: 100px;
        border-radius: 4px;
        padding: 5px 10px;
        background: field;
        font-size: 12px;
        line-height: 1.5;
        white-space: wrap;
        word-break: break-all;
        overflow-y: auto;
        position: relative;
    }
    .output-wrapper .copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>