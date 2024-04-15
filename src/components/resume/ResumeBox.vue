<template>
    <ol>
    </ol>
</template>

<script setup lang='ts'>
    import ResumeTitle from './ResumeTitle.vue';
    import ResumeRow from './ResumeRow.vue';

    enum ListType {
        NUMBER = 'number',
        CIRCLE = 'circle',
        SQUARE = 'square',
        NONE = 'none',
    }

    defineProps({
        type: {
            type: String,
            value: ListType.NONE
        },
        list: Object
    })
</script>

<style scoped>
    
</style>