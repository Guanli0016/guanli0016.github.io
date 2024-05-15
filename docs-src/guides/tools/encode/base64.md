---
    layout: doc
---

### Base64编码/解码
<br>
<div class="input-wrapper">
    <textarea v-model="input"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encode">编码</button>
    <button class="GLButton" blue @click="decode">解码</button>
</div>
<br>
<div class="output-wrapper" @mouseenter="copyShow = true" @mouseleave="copyShow = false">
    {{ output }}
    <CopyButton class="copy-button" title="复制" :content="output" :show="copyShow"></CopyButton>
</div>

<script setup lang="ts">
    import { ref } from 'vue';
    import CopyButton from '../../../components/ui/CopyButton.vue';
    import base64 from 'crypto-js/enc-base64';
    import utf8 from 'crypto-js/enc-utf8';

    const input = ref('www.liuguanli.com');
    const output = ref('');

    const copyShow = ref( false );

    const encode = (): void => {
        output.value = base64.stringify( utf8.parse( input.value ));
    }

    const decode = (): void => {
        try {
            output.value = base64.parse( input.value ).toString( utf8 );
        } catch ( err: Error ) {
            console.log( err );
            output.value = '解码失败，可能不是Base64编码格式';
        }
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
        font-size: 12px;
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