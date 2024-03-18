<template>
    <div class="wrapper">
        <div class="resume-wrapper">
            <ResumeTitle>基本信息</ResumeTitle>
            <ResumeRow v-for="( value, key ) in data.base" :tips="key">{{ value }}</ResumeRow>
            <ResumeTitle>职业技能</ResumeTitle>
            <ResumeRow v-for="( value, index ) in data.skill">{{ index + 1 }}. {{ value }}</ResumeRow>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import data from '../data/resume.json';
    import ResumeRow from '@/components/resume/ResumeRow.vue';
    import ResumeTitle from '@/components/resume/ResumeTitle.vue';
</script>

<style scoped>
    .wrapper {
        background-color: #1C1C1C;
    }
    .resume-wrapper {
        max-width: 1000px;
        margin: 0 auto;
    }
    .resume-wrapper h2 {
        padding: 10px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #fff;
        font-size: 20px;
        line-height: 1.5;
    }
</style>