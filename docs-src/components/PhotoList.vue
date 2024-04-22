<template>
    <div class='photos-view-box' @click='onPhotoView'>
        <div class='photos-view' ref='photoView'></div>
        <div class='photos-cate'>{{ cate }}</div>
    </div>
</template>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';

    const props = defineProps<{
        cate: string,
        photos: string[]
    }>()

    const photoView = ref<HTMLElement>();

    const emit = defineEmits<{
        ( e: 'photo-view', cate: string ): void
    }>()

    const onPhotoView = () => {
        emit( 'photo-view', props.cate );
    }

    const setViewBg = ( photos: string[] ) => {
        let images: string[] = photos.slice( 0, 9 ).map(( path: string ) => {
            return `url(/photos/${ path })`;
        });
        ( photoView.value as HTMLElement ).style.backgroundImage = images.join(',');
    }
    
    onMounted(() => {
        setViewBg( props.photos );
    })

</script>

<style scoped>
    .photos-view-box .photos-view {
        width: 108px;
        height: 108px;
        background-color: #F1F3F5;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position: 2px 2px, 37px 2px, 72px 2px,
                            2px 37px, 37px 37px, 72px 37px,
                            2px 72px, 37px 72px, 72px 72px;
        border: 1px solid #A1A2A3;
        box-shadow: 1px 1px 6px rgba(143, 160, 187, 0.6);
        border-radius: 8px;
        cursor: pointer;
    }
    .photos-view-box .photos-cate {
        margin-top: 10px;
        line-height: 1;
        text-align: center;
        color: cornsilk;
    }
</style>