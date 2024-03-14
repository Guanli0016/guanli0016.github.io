<template>
    <div class="wrapper">
        <Header></Header>
    </div>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    import Header from './components/Header.vue';
    
</script>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        background: url(./images/background.jpg) no-repeat center;
        background-size: cover;
    }
</style>