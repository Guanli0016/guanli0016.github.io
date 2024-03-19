<template>
    <div class="resume-row">
        <span v-if="!!tips">
            <span class="tips">{{ tips }}</span>：
        </span>
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
    
    defineProps({
        tips: String
    })
    
</script>

<style scoped>
    .resume-row {
        width: 100%;
        margin: 8px 0;
        font-size: 16px;
        line-height: 1.5;
        color: #fff;
        letter-spacing: 2px;
        text-align: justify;
    }
    .resume-row .tips {
        display: inline-block;
        width: calc( 4em + 8px );
        text-align: justify;
        text-align-last: justify;
    }
</style>