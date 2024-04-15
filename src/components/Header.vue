<template>
    <header>
        <router-link class="link home" to="/">Guanli</router-link>
        <router-link class="link" to="/life">生活点滴</router-link>
        <router-link class="link" to="/favorite">收藏</router-link>
    </header>
</template>

<script setup lang='ts'>
    import { ref } from 'vue';
    
</script>

<style scoped>
    header {
        width: 100%;
        height: 66px;
        padding: 10px;
        background-color: transparent;
    }
    header .link {
        margin: 0 10px;
        font-size: 16px;
        line-height: 46px;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
        color: #fff;
        text-decoration: none;
    }
    header .link.home {
        font-family: "Script MT";
        font-weight: bold;
        font-size: 32px;
        margin-right: 35px;
    }

    /* @media screen and ( max-width: 820px ) {
        header {
            padding: 10px;
        }
        header .link {
            margin: 0 5px;
        }
        header .link.home {
            margin: 0 15px 0 0;
        }
    } */
</style>