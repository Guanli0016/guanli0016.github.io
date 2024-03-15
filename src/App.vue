<template>
    <div class="container">
        <Header></Header>
        <router-view class="router-view"></router-view>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    import Header from './components/Header.vue';
    
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
        background: url(./images/background.jpg) no-repeat center;
        background-size: cover;
    }
    .router-view {
        width: 100%;
        min-height: 100%;
        padding: 50px 20px 0;
    }
</style>