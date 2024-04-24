---
    layout: page
    sidebar: false
---

<MainWrapper>
    <PhotoItem v-for='(image, index) in photos' :photo='fullurl(image)' :index='index'></PhotoItem>
</MainWrapper>

<script setup lang='ts'>
    import { ref, computed } from 'vue';
    import { useData } from 'vitepress';

    import MainWrapper from '../../components/MainWrapper.vue';
    import PhotoItem from '../../components/PhotoItem.vue';
    import config from '../../configs/photos.json';

    const { params } = useData();
    const photos: string[] = config[ params.value.people ][ params.value.cate ];

    const fullurl = computed(() => {
        return function( url: string ) {
            return `/photos/${ url }`;
        }
    });
</script>

<style scoped>
    img {
        border-radius: 4px;
    }
</style>