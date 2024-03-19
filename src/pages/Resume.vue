<template>
    <div class="wrapper">
        <div class="resume-wrapper">
            <div v-for="( value, key ) in resumelist">
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
        </div>
    </div>
</template>

<script setup lang='ts'>
    
    import resumelist from '../data/resume.json';
    import { isArray, isObject } from '@/utils/Checker';

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
</style>