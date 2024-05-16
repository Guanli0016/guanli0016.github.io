---
    layout: doc
---

### Base64编码/解码
<br>
<div class="input-wrapper">
    <textarea class="GLTextarea" v-model="input" placeholder="请输入需要编码/解码的字符串"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encode">编码</button>
    <button class="GLButton" blue @click="decode">解码</button>
</div>
<br>
<OutputArea :output="output"></OutputArea>

<script setup lang="ts">
    import { ref } from 'vue';
    import OutputArea from '../../../components/OutputArea.vue';
    import base64 from 'crypto-js/enc-base64';
    import utf8 from 'crypto-js/enc-utf8';

    const input = ref('');
    const output = ref('');

    const encode = (): void => {
        output.value = base64.stringify( utf8.parse( input.value ));
    }

    const decode = (): void => {
        try {
            output.value = base64.parse( input.value ).toString( utf8 );
        } catch ( err: Error ) {
            output.value = '解码失败，可能不是Base64编码格式';
        }
    }

</script>

<style scoped>
    .input-wrapper {
        height: 100px;
    }
    .buttons {
        display: flex;
        justify-content: center;
    }
    .buttons button {
        margin: 0 20px;
    }
</style>