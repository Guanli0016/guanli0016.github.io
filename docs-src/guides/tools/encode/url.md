---
    layout: doc
---

### URL编码/解码
<br>
<div class="input-wrapper">
    <textarea class="GLTextarea" v-model="input" placeholder="请输入需要编码/解码的字符串"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encode">URL编码</button>
    <button class="GLButton" blue @click="decode">URL解码</button>
</div>
<br>
<OutputArea :output="output"></OutputArea>

<script setup lang="ts">
    import { ref } from 'vue';
    import OutputArea from '../../../components/OutputArea.vue';

    const input = ref('');
    const output = ref('');

    const copyShow = ref( false );

    const encode = (): void => {
        output.value = encodeURIComponent( input.value );
    }

    const decode = (): void => {
        output.value = decodeURIComponent( input.value );
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
        margin: 0 10px;
    }
</style>