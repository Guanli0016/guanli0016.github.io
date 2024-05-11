<template>
    <div class="code-area-wrapper" v-if="!!code" @mouseenter="copyShow = true" @mouseleave="copyShow = false">
        <div class="code-area">
            <h6>CODE</h6>
            <p>{{ code }}</p>
        </div>
        <CopyButton class="copy-button" title="复制代码" :content="code" :show="copyShow"></CopyButton>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    import CopyButton from './ui/CopyButton.vue';

    const copyShow = ref(false);
    
    const props = defineProps<{
        code: string
    }>();
</script>
<style scoped>
    .code-area-wrapper {
        width: 100%;
        height: auto;
        background: field;
        position: relative;
    }
    .code-area-wrapper .code-area {
        box-sizing: border-box;
        padding: 10px 20px;
        overflow-x: auto;
        overflow-y: hidden;
        font-size: 12px;
        line-height: 20px;
    }
    .code-area-wrapper h6 {
        line-height: 40px;
    }
    .code-area-wrapper p {
        margin: 0;
        line-height: 24px;
        white-space: nowrap;
    }
    .code-area-wrapper .copy-button {
        position: absolute;
        top: 12px;
        right: 12px;
    }
</style>