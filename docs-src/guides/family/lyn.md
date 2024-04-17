---
    layout: page
    sidebar: false
---

<MainWrapper layout="grid">
    <PhotoView v-for='item in photoslist' :name="item.name" :photos="item.data" @photo-view="gotoPhoto">{{ i }}</PhotoView>
</MainWrapper>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';

    import MainWrapper from '../../components/MainWrapper.vue';
    import PhotoView from '../../components/PhotoView.vue';
    import config from '../../photos/baby/config.json';

    type Photos = {
        name: string,
        data: string[],
    }

    const photoslist = ref<Photos[]>([]);

    onMounted(() => {
        for ( let name in config ) {
            const data: Photos = {
                name: name,
                data: config[name]
            }
            photoslist.value.push(data);
        }
    })

    const gotoPhoto = ( data: string[] ): void => {
        
    }
</script>

<style scoped>
    
</style>