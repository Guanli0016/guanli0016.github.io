---
    layout: doc
---

### MD5加密
<br>
<div class="input-wrapper">
    <textarea v-model="input" placeholder="请输入需要加密的字符串"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encrypt">MD5加密</button>
</div>
<br>
<div class="output-wrapper" @mouseenter="copyShow = true" @mouseleave="copyShow = false">
    {{ output }}
    <CopyButton class="copy-button" title="复制" :content="output" :show="copyShow"></CopyButton>
</div>

<script setup lang="ts">
    import { ref } from 'vue';
    import CopyButton from '../../../components/ui/CopyButton.vue';
    import md5 from "crypto-js/md5";

    const input = ref('www.liuguanli.com');
    const output = ref('');

    const copyShow = ref( false );

    const encrypt = (): void => {
        output.value = md5( input.value ).toString().toUpperCase();
    }

</script>

<style scoped>
    .input-wrapper {
        height: 100px;
        border-radius: 4px;
    }
    .output-wrapper {
        height: 100px;
        border-radius: 4px;
        padding: 5px 10px;
        background: field;
        font-size: 16px;
        line-height: 1.5;
        white-space: wrap;
        word-break: break-all;
        overflow-y: auto;
        position: relative;
    }
    .output-wrapper .copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .buttons {
        display: flex;
        justify-content: center;
    }
    .buttons button {
        margin: 0 20px;
    }
</style>