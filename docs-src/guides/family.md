---
    layout: page
    title: 家庭
    sidebar: false
---

# 家庭

<div class='photo-list'>
    <img v-for='photo in photos' :src='photo' />
</div>

<script setup lang='ts'>
    import { ref } from 'vue';

    let photos = ref<string[]>([
        '/photos/photo-1.jpg',
        '/photos/photo-2.jpg',
        '/photos/photo-3.jpg',
        '/photos/photo-4.jpg',
        '/photos/photo-5.jpg',
        '/photos/photo-6.jpg',
    ]);

</script>

<style scoped>
    .photo-list {
        width: 800px;
        margin: 0 auto;
    }
    .photo-list img {
        max-width: 100%;
        margin: 10px auto;
    }
</style>
