<template>
    <div class='photos-view-box' @click="onPhotoView">
        <div class='photos-view'>

        </div>
        <div class='photos-name'>{{ name }}</div>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';

    const props = defineProps<{
        name: string,
        photos: string[]
    }>()

    const emit = defineEmits<{
        ( e: 'photo-view', photos: string[] ): void
    }>()

    const onPhotoView = () => {
        emit( 'photo-view', props.photos );
    }
    
</script>

<style scoped>
    .photos-view-box .photos-view {
        width: 100%;
        height: calc(100% - 26px);
        background-color: #F1F3F5;
        border: 1px solid #A1A2A3;
        box-shadow: 1px 1px 6px rgba(143, 160, 187, 0.6);
        border-radius: 8px;
        cursor: pointer;
    }
    .photos-view-box .photos-name {
        margin-top: 10px;
        line-height: 1;
        text-align: center;
        color: cornsilk;
    }
</style>