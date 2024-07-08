<template>
    <div class='photo-item' @click='onPhotoView'>
        <img loading="lazy" :src='photo' :alt='photo'/>
    </div>
</template>

<script setup lang='ts'>
    const props = defineProps<{
        index: number,
        photo: string
    }>()

    const emit = defineEmits<{
        ( e: 'photo-view', index: number ): void
    }>()

    const onPhotoView = () => {
        emit( 'photo-view', props.index );
    }
</script>

<style scoped>
    .photo-item {
        width: 100%;
        max-width: 640px;
        margin: 0 auto 32px;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(243, 245, 247, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .photo-item img {
        display: block;
    }
</style>