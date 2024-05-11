---
    layout: page
    sidebar: false

    title: 照片
---

<PageWrapper layout='grid'>
    <PhotoList v-for='item in photoslist' :cate='item.cate' :photos='item.data' @photo-view='gotoPhoto'></PhotoList>
</PageWrapper>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';
    import { useData } from 'vitepress';

    import PageWrapper from '../../components/PageWrapper.vue';
    import PhotoList from '../../components/PhotoList.vue';
    import config from '../../configs/photos.json';

    const { params } = useData();
    
    type Photos = {
        cate: string,
        data: string[],
    }

    const photoslist = ref<Photos[]>([]);

    onMounted(() => {
        buildPhotosList( config[ params.value.people ] );
    });

    const buildPhotosList = ( config: any ) => {
        for ( let cate in config ) {
            const data: Photos = {
                cate: cate,
                data: config[cate]
            }
            photoslist.value.push(data);
        }
    }

    const gotoPhoto = ( cate: string ): void => {
        location.href = `/guides/photos/${ params.value.people }-${ cate }`;
    }
</script>

<style scoped>
    
</style>