---
    layout: doc

    title: 我的相册
---

<PageWrapper>
    <PhotoItem v-for='(image, index) in photos' :photo='image' :index='index'></PhotoItem>
</PageWrapper>

<script setup lang='ts'>
    import { ref } from 'vue';
    import { useData } from 'vitepress';

    import PageWrapper from '../../components/PageWrapper.vue';
    import PhotoItem from '../../components/PhotoItem.vue';
    import photoConfig from '../../configs/photos.json';

    const { params } = useData();
    const { subject, category } = params.value;

    const photos: string[] = photoConfig.items.find(( item: string ) => item.text === subject ).items.find(( item: string ) => item.text === category ).items;
    
</script>

<style scoped>
    img {
        border-radius: 4px;
    }
</style>