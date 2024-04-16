---
    layout: page
    sidebar: false
---

<GridWrapper>
    <PhotoView v-for='item in photoslist' :name="item.name" :photos="item.data" @photo-view="gotoPhoto">{{ i }}</PhotoView>
</GridWrapper>

<script setup lang='ts'>
    import { ref } from 'vue';

    import GridWrapper from '../../components/GridWrapper.vue';
    import PhotoView from '../../components/PhotoView.vue';
    import config from '../../photos/baby/config.json';

    console.log(config.category);

    type Photos = {
        name: string,
        data: string[],
    }

    const photoslist = ref<Photos[]>([]);

    config.category.forEach(async (item, index) => {
        let obj: any = {};
        obj.name = item;
        obj.data = [];
        photoslist.value.push(obj);
    });

    const gotoPhoto = ( data: string[] ): void => {
        console.log(data);
    }
</script>

<style scoped>
    
</style>