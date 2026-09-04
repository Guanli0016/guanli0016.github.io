---
    layout: page
    sidebar: false

    title: 我的简历
---

<PageWrapper>
    <div class="resume-page">
        <div v-for="(value, key) in resumeData" :key="key" class="resume-module">
            <h2 class="resume-title" :id="key">{{ key }}</h2>
            <ul v-if="isArray(value) && value.every(isString)" class="resume-list">
                <li v-for="(v, i) in value" :key="i">
                    <a v-if="isLink(v)" :href="v" target="_blank" rel="noopener noreferrer">{{ v }}</a>
                    <span v-else>{{ v }}</span>
                </li>
            </ul>
            <div v-else-if="isArray(value)" class="resume-items">
                <div v-for="(item, i) in value" :key="i" class="resume-item">
                    <div v-for="(v, k) in item" :key="k" class="resume-row">
                        <span class="resume-label">{{ k }}</span>：
                        <div v-if="isArray(v)" class="resume-value">
                            <ul class="resume-list resume-item-list">
                                <li v-for="(text, j) in v" :key="j">
                                    <a v-if="isLink(text)" :href="text" target="_blank" rel="noopener noreferrer">{{ text }}</a>
                                    <span v-else>{{ text }}</span>
                                </li>
                            </ul>
                        </div>
                        <span v-else class="resume-value">
                            <a v-if="isLink(v)" :href="v" target="_blank" rel="noopener noreferrer">{{ v }}</a>
                            <template v-else>{{ v }}</template>
                        </span>
                    </div>
                </div>
            </div>
            <div v-else-if="isObject(value)" class="resume-detail">
                <div v-for="(v, k) in value" :key="k" class="resume-row">
                    <span class="resume-label">{{ k }}</span>：
                    <span class="resume-value">
                        <a v-if="isLink(v)" :href="v" target="_blank" rel="noopener noreferrer">{{ v }}</a>
                        <template v-else>{{ v }}</template>
                    </span>
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
    const isString = (value: unknown) => Object.prototype.toString.call(value) === '[object String]';
    const isObject = (value: unknown) => Object.prototype.toString.call(value) === '[object Object]';
    const isLink = (value: unknown): value is string => typeof value === 'string' && /^https?:\/\/\S+$/i.test(value);
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
        text-align: justify;
    }

    .resume-title {
        margin: 0 0 12px;
        font-size: 1.5rem;
        line-height: 1.6;
        font-weight: 700;
        color: #fff;
        display: flex;
        align-items: center;
    }

    .resume-title::before {
        content: '';
        width: 4px;
        height: 1.1em;
        border-radius: 2px;
        background: #00ffea;
        margin-right: 16px;
    }

    .resume-list {
        margin: 0;
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

    .resume-items {
        display: grid;
        gap: 20px;
    }

    .resume-item {
        display: grid;
        gap: 8px;
        padding-bottom: 16px;
        border-bottom: 1px dashed #ddd;
    }

    .resume-item:last-child {
        border-bottom: none;
    }

    .resume-item-list {
        margin-top: 0;
    }

    .resume-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2px;
        padding: 0;
        line-height: 1.9;
        color: #fff;
    }

    .resume-row a[href] {
        text-decoration: underline;
    }

    .resume-label {
        min-width: 4em;
        font-size: 0.96rem;
        line-height: 1.9;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.68);
        text-align-last: justify;
    }

    .resume-value {
        flex: 1;
        min-width: 180px;
        font-size: 0.96rem;
        line-height: 1.9;
        color: rgba(255, 255, 255);
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
        .resume-title::before {
            margin-right: 12px;
        }

        .resume-item {
            padding-bottom: 12px;
        }

    }
</style>