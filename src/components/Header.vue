<template>
    <header>
        <router-link class="link home" to="/">刘冠立的个人主页</router-link>
        <router-link class="link" to="/family">家庭</router-link>
        <router-link class="link" to="/article">文章</router-link>
        <router-link class="link" to="/photo">照片</router-link>
        <router-link class="link" to="/resume">简历</router-link>
        <router-link class="link" to="/about">关于</router-link>
    </header>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    
</script>

<style scoped>
    header {
        width: 100%;
        height: 50px;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: left;
    }
    header .link {
        margin: 0 10px;
        font-size: 16px;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
        line-height: 30px;
        color: #fff;
        text-decoration: none;
    }
    header .link.home {
        margin: 0 35px 0 0;
        font-size: 18px;
    }

    @media screen and ( max-width: 820px ) {
        header {
            padding: 10px;
        }
        header .link {
            margin: 0 5px;
        }
        header .link.home {
            margin: 0 15px 0 0;
        }
    }
</style>