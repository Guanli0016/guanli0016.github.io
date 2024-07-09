<script setup lang="ts">
    import { type Ref, inject } from 'vue'
    import type { DefaultTheme } from 'vitepress/theme'
    import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
    import Clock from '../customs/clock/Index.vue';

    export interface HeroAction {
        theme?: 'brand' | 'alt'
        text: string
        link: string
        target?: string
        rel?: string
    }

    defineProps<{
        name?: string
        text?: string
        tagline?: string
        image?: DefaultTheme.ThemeableImage
        actions?: HeroAction[]
    }>()

    const heroImageSlotExists = inject('hero-image-slot-exists') as Ref<boolean>
</script>

<template>
    <div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
        <div class="container">
            <div class="main">
                <slot name="home-hero-info-before" />
                <slot name="home-hero-info">
                    <h1 v-if="name" class="name">
                        <!-- <video src="/videos/fire.mp4" autoplay muted loop></video> -->
                        <p class="name-text">
                            <span v-for="l in name" v-html="l" class="clip"></span>
                        </p>
                    </h1>
                    <p v-if="text" class="text">
                        <span v-for="l in text" v-html="l" class="clip"></span>
                    </p>
                    <p v-if="tagline" class="tagline">
                        <span v-for="l in tagline" v-html="l" class="clip"></span>
                    </p>
                </slot>
                <slot name="home-hero-info-after" />

                <div v-if="actions" class="actions">
                    <div v-for="action in actions" :key="action.link" class="action">
                        <VPButton tag="a" size="medium" :theme="action.theme" :text="action.text" :href="action.link"
                            :target="action.target" :rel="action.rel" />
                    </div>
                </div>
                <slot name="home-hero-actions-after" />
            </div>

            <div v-if="image || heroImageSlotExists" class="image">
                <div class="image-container">
                    <div class="image-bg" />
                    <slot name="home-hero-image">
                        <Clock class="image-src" />
                        <!-- <VPImage v-if="image" class="image-src" :image="image" /> -->
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .VPHero {
        font-family: ALMM-FYT;
        margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
    }

    @media (min-width: 640px) {
        .VPHero {
            padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
        }
    }

    @media (min-width: 960px) {
        .VPHero {
            padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1152px;
    }

    @media (min-width: 960px) {
        .container {
            flex-direction: row;
        }
    }

    .main {
        position: relative;
        z-index: 10;
        order: 2;
        flex-grow: 1;
        flex-shrink: 0;
    }

    .VPHero.has-image .container {
        text-align: center;
    }

    @media (min-width: 960px) {
        .VPHero.has-image .container {
            text-align: left;
        }
    }

    @media (min-width: 960px) {
        .main {
            order: 1;
            width: calc((100% / 3) * 2);
        }

        .VPHero.has-image .main {
            max-width: 592px;
        }
    }

    .name,
    .text {
        max-width: 392px;
        letter-spacing: -0.4px;
        line-height: 40px;
        font-size: 32px;
        font-weight: 700;
        white-space: pre-wrap;
    }

    .VPHero.has-image .name,
    .VPHero.has-image .text {
        margin: 0 auto;
    }

    .name {
        color: var(--vp-home-hero-name-color);
        position: relative;
    }

    .name video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    .name .name-text {
        background-color: transparent;
        color: var(--vp-home-hero-name-color);
        position: relative;
        /* mix-blend-mode: screen; */
        display: flex;
        justify-content: center;
    }
    
    .name .name-text .clip {
        letter-spacing: 6px;
        transform-origin: bottom;
        animation: jump 4.8s linear infinite;
    }
    .name .name-text .clip:nth-child(1) {
        animation-delay: 0;
    }
    .name .name-text .clip:nth-child(2) {
        animation-delay: 1.6s;
    }
    .name .name-text .clip:nth-child(3) {
        animation-delay: 3.2s;
    }
    
    .text .clip {
        background-color: var(--vp-c-bg);
        -webkit-background-clip: text;
        background-clip: text;
        /* -webkit-text-fill-color: var(--vp-home-hero-name-color); */
        letter-spacing: 6px;
        animation: spread 2s ease-in-out infinite alternate;
    }
    .text .clip:nth-child(1) {
        animation-delay: 0s;
    }
    .text .clip:nth-child(2) {
        animation-delay: 0.2s;
    }
    .text .clip:nth-child(3) {
        animation-delay: 0.4s;
    }
    .text .clip:nth-child(4) {
        animation-delay: 0.6s;
    }
    .text .clip:nth-child(5) {
        animation-delay: 0.8s;
    }
    .text .clip:nth-child(6) {
        animation-delay: 1s;
    }

    @media (min-width: 640px) {

        .name,
        .text {
            max-width: 576px;
            line-height: 56px; 
            font-size: 48px;
        }
    }

    @media (min-width: 960px) {

        .name,
        .text {
            line-height: 64px;
            font-size: 56px;
        }

        .VPHero.has-image .name,
        .VPHero.has-image .text {
            margin: 0;
        }
        .name .name-text {
            justify-content: start;
        }
    }

    .tagline {
        padding-top: 8px;
        max-width: 392px;
        line-height: 28px;
        font-size: 18px;
        font-weight: 500;
        white-space: pre-wrap;
        color: var(--vp-c-text-2);
    }

    .VPHero.has-image .tagline {
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        .tagline {
            padding-top: 12px;
            max-width: 576px;
            line-height: 32px;
            font-size: 20px;
        }
    }

    @media (min-width: 960px) {
        .tagline {
            line-height: 36px;
            font-size: 24px;
        }

        .VPHero.has-image .tagline {
            margin: 0;
        }
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        margin: -6px;
        padding-top: 24px;
    }

    .VPHero.has-image .actions {
        justify-content: center;
    }

    @media (min-width: 640px) {
        .actions {
            padding-top: 32px;
        }
    }

    @media (min-width: 960px) {
        .VPHero.has-image .actions {
            justify-content: flex-start;
        }
    }

    .action {
        flex-shrink: 0;
        padding: 6px;
    }

    .image {
        order: 1;
        margin: -76px -24px -48px;
    }

    @media (min-width: 640px) {
        .image {
            margin: -108px -24px -48px;
        }
    }

    @media (min-width: 960px) {
        .image {
            flex-grow: 1;
            order: 2;
            margin: 0;
            min-height: 100%;
        }
    }

    .image-container {
        position: relative;
        margin: 0 auto;
        width: 320px;
        height: 320px;
    }

    @media (min-width: 640px) {
        .image-container {
            width: 392px;
            height: 392px;
        }
    }

    @media (min-width: 960px) {
        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            /*rtl:ignore*/
            /* transform: translate(-32px, -32px); */
        }
    }

    .image-bg {
        position: absolute;
        top: 50%;
        /*rtl:ignore*/
        left: 50%;
        border-radius: 50%;
        width: 192px;
        height: 192px;
        background-image: var(--vp-home-hero-image-background-image);
        filter: var(--vp-home-hero-image-filter);
        /*rtl:ignore*/
        transform: translate(-50%, -50%);
    }

    @media (min-width: 640px) {
        .image-bg {
            width: 256px;
            height: 256px;
        }
    }

    @media (min-width: 960px) {
        .image-bg {
            width: 320px;
            height: 320px;
        }
    }

    :deep(.image-src) {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 192px;
        height: 192px;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 640px) {
        :deep(.image-src) {
            width: 256px;
            height: 256px;
        }
    }

    @media (min-width: 960px) {
        :deep(.image-src) {
            width: 320px;
            height: 320px;
        }
    }

    @keyframes spread {
        to {
            color: #bd34fe;
            /* text-shadow: 1px 1px 2px #a8b1ff; */
        }
    }

    @keyframes jump {
        0% {
            transform: scaleY(1);
        }
        15% {
            transform: scaleY(80%);
        }
        18% {
            transform: scaleY(1);
        }
        21% {
            transform: translateY(-40%);
        }
        24% {
            transform: translateY(0);
        }
        26% {
            transform: scaleY(80%);
        }
        30% {
            transform: scaleY(1);
        }
    }

</style>