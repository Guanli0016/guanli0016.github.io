<template>
    <button 
        class="copy"
        :title="title"
        :class="{ copied: copied, show: show }"
        @click="copyCode"
    ></button>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    import { copyToClipboard } from '../../utils/Utils';

    const copied = ref( false );

    const props = withDefaults(defineProps<{
        title: string,
        content: string,
        show: boolean
    }>(), {
        title: '复制',
        content: '',
        show: false
    });

    const copyCode = () => {
        copyToClipboard( props.content ).then(() => {
            copied.value = true;
            setTimeout(() => copied.value = false, 1800);
        });
    }
    
</script>

<style scoped>
    button.copy {
        opacity: 0;
        border: 1px solid var(--vp-code-copy-code-border-color);
        border-radius: 4px;
        width: 40px;
        height: 40px;
        background-color: var(--vp-code-copy-code-bg);
        cursor: pointer;
        background-image: var(--vp-icon-copy);
        background-position: 50%;
        background-size: 20px;
        background-repeat: no-repeat;
        transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
    }
    button.copy:hover {
        border-color: var(--vp-code-copy-code-hover-border-color);
        background-color: var(--vp-code-copy-code-hover-bg);
    }
    button.copy.show {
        opacity: 1;
    }
    button.copy.copied {
        opacity: 1;
        border-radius: 0 4px 4px 0;
        background-color: var(--vp-code-copy-code-hover-bg);
        background-image: var(--vp-icon-copied);
    }
    button.copy.copied::before {
        position: relative;
        top: -1px;
        transform: translateX(calc(-100% - 1px));
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--vp-code-copy-code-hover-border-color);
        border-right: 0;
        border-radius: 4px 0 0 4px;
        padding: 0 10px;
        width: fit-content;
        height: 40px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        color: var(--vp-code-copy-code-active-text);
        background-color: var(--vp-code-copy-code-hover-bg);
        white-space: nowrap;
        content: var(--vp-code-copy-copied-text-content);
    }
</style>