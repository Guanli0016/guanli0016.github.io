---
    layout: doc
---

### MD5加密
<br>
<div class="input-wrapper">
    <textarea class="GLTextarea" v-model="input" placeholder="请输入需要加密的字符串"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encrypt">MD5加密</button>
</div>
<br>
<OutputArea :output="output"></OutputArea>

<script setup lang="ts">
    import { ref } from 'vue';
    import OutputArea from '../../../components/OutputArea.vue';
    import md5 from "crypto-js/md5";

    const input = ref('');
    const output = ref('');

    const copyShow = ref( false );

    const encrypt = (): void => {
        output.value = md5( input.value ).toString().toUpperCase();
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