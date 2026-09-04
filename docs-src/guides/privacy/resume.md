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
        --resume-cyan: #00ffea;
        --resume-lime: #c7f36b;
        --resume-text: rgba(255, 255, 255, 0.92);
        --resume-muted: rgba(255, 255, 255, 0.56);
        position: relative;
        max-width: 1040px;
        margin: 0 auto;
        padding: 24px 0 64px;
        color: var(--resume-text);
        counter-reset: resume-item;
        isolation: isolate;
    }

    .resume-page::before {
        position: fixed;
        z-index: -1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
        background-size: 42px 42px;
        content: '';
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 76%);
        pointer-events: none;
    }

    .resume-module {
        position: relative;
        margin-bottom: 44px;
        text-align: justify;
        animation: resume-module-in 0.7s both;
    }

    .resume-module:nth-child(2) { animation-delay: 0.08s; }
    .resume-module:nth-child(3) { animation-delay: 0.16s; }
    .resume-module:nth-child(4) { animation-delay: 0.24s; }
    .resume-module:nth-child(5) { animation-delay: 0.32s; }
    .resume-module:nth-child(6) { animation-delay: 0.4s; }

    @keyframes resume-module-in {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .resume-title {
        position: relative;
        display: flex;
        align-items: center;
        gap: 14px;
        margin: 0 0 22px;
        padding-bottom: 12px;
        font-size: 1.5rem;
        line-height: 1.35;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.04em;
    }

    .resume-title::before {
        width: 7px;
        height: 7px;
        background: var(--resume-cyan);
        content: '';
        box-shadow: 0 0 12px rgba(0, 255, 234, 0.7);
        transform: rotate(45deg);
    }

    .resume-title::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 360px;
        max-width: 100%;
        height: 1px;
        background: linear-gradient(90deg, var(--resume-cyan), rgba(0, 255, 234, 0.08), transparent);
        content: '';
        transform-origin: left;
        animation: resume-title-line 1s 0.35s both;
    }

    @keyframes resume-title-line {
        from { opacity: 0; transform: scaleX(0); }
        to { opacity: 1; transform: scaleX(1); }
    }

    .resume-list {
        margin: 0;
    }

    .resume-list li {
        margin: 0 0 11px;
        font-size: 0.98rem;
        line-height: 1.85;
        color: var(--resume-text);
        transition: color 0.25s ease, transform 0.25s ease;
    }

    .resume-list li::marker { color: var(--resume-cyan); }

    .resume-list li:hover {
        color: #fff;
        transform: translateX(4px);
    }

    .resume-detail {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 5px 28px;
    }

    .resume-items {
        display: grid;
        gap: 25px;
        counter-reset: resume-item;
    }

    .resume-item {
        position: relative;
        display: grid;
        gap: 10px;
        padding: 0 0 25px 52px;
        counter-increment: resume-item;
    }

    .resume-item::before {
        position: absolute;
        top: 1.2em;
        left: 10px;
        width: 12px;
        height: 12px;
        content: counter(resume-item, decimal-leading-zero);
        color: var(--resume-cyan);
        font-family: monospace;
        font-size: 0.58rem;
        line-height: 12px;
        text-align: center;
        transform: rotate(45deg);
        transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }

    .resume-item:hover::before {
        background: rgba(0, 255, 234, 0.16);
        box-shadow: 0 0 16px rgba(0, 255, 234, 0.55);
        transform: rotate(135deg) scale(1.12);
    }

    .resume-item:not(:last-child)::after {
        position: absolute;
        top: 27px;
        bottom: 0;
        left: 16px;
        width: 1px;
        background: linear-gradient(var(--resume-cyan), transparent);
        content: '';
        opacity: 0.42;
    }

    .resume-item:last-child { padding-bottom: 0; }

    .resume-item-list {
        margin-top: 0;
    }

    .resume-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0 8px;
        min-width: 0;
        padding: 3px 0;
        line-height: 1.85;
        color: var(--resume-text);
        transition: transform 0.25s ease;
    }

    .resume-row:hover { transform: translateX(3px); }

    .resume-label {
        min-width: 4em;
        font-size: 0.96rem;
        line-height: 1.9;
        font-weight: 700;
        color: var(--resume-muted);
        text-align-last: justify;
    }

    .resume-value {
        flex: 1;
        min-width: 0;
        font-size: 0.96rem;
        line-height: 1.85;
        color: var(--resume-text);
        word-break: break-word;
    }

    .resume-item .resume-row:first-child .resume-label,
    .resume-item .resume-row:first-child .resume-value {
        color: #fff;
        font-size: 1.04rem;
        font-weight: 700;
    }

    .resume-item .resume-row:first-child .resume-value { color: var(--resume-lime); }

    .resume-row a[href] {
        position: relative;
        color: var(--resume-cyan);
        text-decoration: none;
    }

    .resume-row a[href]::after {
        position: absolute;
        right: 0;
        bottom: -2px;
        left: 0;
        height: 1px;
        background: currentColor;
        content: '';
        opacity: 0.5;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.25s ease;
    }

    .resume-row a[href]:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    @media (max-width: 640px) {
        .resume-page { padding: 8px 0 36px; }
        .resume-module { margin-bottom: 34px; }
        .resume-title { margin-bottom: 17px; font-size: 1.1rem; }
        .resume-detail { grid-template-columns: 1fr; }
        .resume-item { padding-left: 26px; }
        .resume-item::before { left: 5px; }
        .resume-item:not(:last-child)::after { left: 11px; }
        .resume-label, .resume-value, .resume-list li { font-size: 0.92rem; }
        .resume-item .resume-row:first-child .resume-label, .resume-item .resume-row:first-child .resume-value { font-size: 0.98rem; }
    }

    @media (prefers-reduced-motion: reduce) {
        .resume-module, .resume-title::after, .resume-item::before {
            animation: none;
            transition: none;
        }
    }
</style>
