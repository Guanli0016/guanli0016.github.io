---
    layout: doc
---

### SHA加密
<br>
<div class="input-wrapper">
    <textarea class="GLTextarea" v-model="input" placeholder="请输入需要加密的字符串"></textarea>
</div>
<br>
<div class="buttons">
    <button class="GLButton" @click="encryptSHA1">SHA1加密</button>
    <button class="GLButton" @click="encryptSHA256">SHA256加密</button>
    <button class="GLButton" @click="encryptSHA512">SHA512加密</button>
</div>
<br>
<OutputArea :output="output"></OutputArea>

<script setup lang="ts">
    import { ref } from 'vue';
    import OutputArea from '../../../components/OutputArea.vue';
    import sha1 from "crypto-js/sha1";
    import sha256 from "crypto-js/sha256";
    import sha512 from "crypto-js/sha512";

    const input = ref('');
    const output = ref('');

    const copyShow = ref( false );

    const encryptSHA1 = (): void => {
        output.value = sha1( input.value ).toString().toUpperCase();
    }
    const encryptSHA256 = (): void => {
        output.value = sha256( input.value ).toString().toUpperCase();
    }
    const encryptSHA512 = (): void => {
        output.value = sha512( input.value ).toString().toUpperCase();
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