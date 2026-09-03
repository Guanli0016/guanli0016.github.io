---
    layout: page
    sidebar: false

    title: 我的简历
---

<PageWrapper>
    <div class="resume-page">
        <div v-for="(value, key) in resumeData" :key="key" class="resume-module">
            <h2 class="resume-title">{{ key }}</h2>
            <ul v-if="isArray(value)" class="resume-list">
                <li v-for="(v, i) in value" :key="i">{{ v }}</li>
            </ul>
            <div v-else-if="isObject(value)" class="resume-detail">
                <div v-for="(v, k) in value" :key="k" class="resume-row">
                    <span class="resume-label">{{ k }}</span>：
                    <span class="resume-value">{{ v }}</span>
                </div>
            </div>
        </div>
    </div>
</PageWrapper>

<script setup lang="ts">
    import { ref } from 'vue';
    import PageWrapper from '../../components/PageWrapper.vue';
    import resumeObj from '../../configs/resume.json';

    const resumeData = ref(resumeObj);

    const isArray = (value: unknown) => Array.isArray(value);
    const isObject = (value: unknown) => Object.prototype.toString.call(value) === '[object Object]';
</script>

<style scoped>
    .resume-page {
        max-width: 980px;
        margin: 0 auto;
        padding: 0 0 32px;
        color: #fff;
    }

    .resume-module {
        margin-bottom: 28px;
        padding: 0;
    }

    .resume-title {
        margin: 0 0 12px;
        font-size: 1.5rem;
        line-height: 1.6;
        font-weight: 700;
        color: #fff;
    }

    .resume-list {
        margin: 0;
        padding-left: 1.2rem;
        list-style: disc;
    }

    .resume-list li {
        margin: 0 0 8px;
        font-size: 0.96rem;
        line-height: 1.9;
        color: #fff;
    }

    .resume-detail {
        display: grid;
        gap: 8px;
    }

    .resume-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2px;
        padding: 0;
        line-height: 1.9;
        color: #fff;
    }

    .resume-label {
        width: 4em;
        font-size: 0.96rem;
        line-height: 1.9;
        font-weight: 700;
        color: #fff;
        text-align-last: justify;
    }

    .resume-value {
        flex: 1;
        min-width: 180px;
        font-size: 0.96rem;
        line-height: 1.9;
        color: #fff;
        word-break: break-word;
    }

    @media (max-width: 640px) {
        .resume-page {
            padding-bottom: 20px;
        }

        .resume-label,
        .resume-value,
        .resume-list li {
            font-size: 0.92rem;
        }
        .resume-title {
            font-size: 1.1rem;
        }

    }
</style>