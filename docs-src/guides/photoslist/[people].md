---
    layout: page
    sidebar: false
---

<MainWrapper layout='grid'>
    <PhotoList v-for='item in photoslist' :cate='item.cate' :photos='item.data' @photo-view='gotoPhoto'></PhotoList>
</MainWrapper>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';
    import { useData } from 'vitepress';

    import MainWrapper from '../../components/MainWrapper.vue';
    import PhotoList from '../../components/PhotoList.vue';
    import config from '../../public/photos/config.json';

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