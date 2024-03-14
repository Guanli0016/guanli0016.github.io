<template>
    <header>
        <router-link class="link home" to="/">刘冠立的个人主页</router-link>
        <router-link class="link" to="/">简介</router-link>
        <router-link class="link" to="/">照片</router-link>
        <router-link class="link" to="/">事迹</router-link>
        <router-link class="link" to="/">家庭</router-link>
        <router-link class="link" to="/">文章</router-link>
    </header>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    
</script>

<style scoped>
    header {
        width: 100%;
        height: 50px;
        padding: 10px 35px;
        background-color: #0593d3;
        border-bottom: 1px solid #0482ba;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: left;
    }
    header .link {
        margin: 0 10px;
        font-size: 16px;
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