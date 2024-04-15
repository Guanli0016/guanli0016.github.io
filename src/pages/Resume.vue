<template>
    <div class="wrapper">
        <div class="resume-wrapper">
            <el-carousel
                ref="carousel"
                height="100vh"
                direction="vertical"
                indicator-position="none"
                arrow="never"
                :loop="false"
                :autoplay="false"
                v-wheel="onswitch"
                v-touch="onswitch"
            >
                <el-carousel-item v-for="( value, key ) in resumelist">
                    <el-icon class="up-arrow" :size="38"><Upload /></el-icon>
                    <div class="resume-item">
                        <ResumeTitle>{{ key }}</ResumeTitle>
                        <ResumeRow 
                            v-if="isObject( value )" 
                            v-for="( v, k ) in value" 
                            :tips="k">
                            {{ v }}
                        </ResumeRow>
                        <ResumeRow 
                            v-if="isArray( value )" 
                            v-for="v in value">
                            {{ v }}
                        </ResumeRow>
                    </div>
                    <el-icon class="down-arrow"><Download /></el-icon>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup lang='ts'>
    
    import { ref } from 'vue';

    import resumelist from '../data/resume.json';
    import { isArray, isObject } from '@/utils/Checker';

    import ResumeRow from '@/components/resume/ResumeRow.vue';
    import ResumeTitle from '@/components/resume/ResumeTitle.vue';
    
    import { vWheel, vTouch } from '@/directives/carousel';

    const carousel = ref();

    const onswitch = ( index: number ) => {
        index > 0 ? carousel.value.next() : carousel.value.prev();
    }
</script>

<style scoped>
    .wrapper {
        padding: 0;
        background: #1C1C1C url(@/images/rain-bg.gif) no-repeat center;
        background-size: cover;
    }
    .resume-wrapper {
        max-width: 1000px;
        margin: 0 auto;
    }
    .resume-item {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;
    }
</style>