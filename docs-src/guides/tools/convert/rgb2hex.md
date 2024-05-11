---
    layout: doc
---

### RGB转16进制 
<br>
<div class="rgb-box">
    <div class="rbg-row">
        红（0 ~ 255）：<input class="rgb-input" type="text" maxlength="3" v-model="red" @input="onRedInput" placeholder="请输入0~255之间的数字" />
    </div>
    <div class="rbg-row">
        绿（0 ~ 255）：<input class="rgb-input" type="text" maxlength="3" v-model="green" @input="onGreenInput" placeholder="请输入0~255之间的数字" />
    </div>
    <div class="rbg-row">
        蓝（0 ~ 255）：<input class="rgb-input" type="text" maxlength="3" v-model="blue" @input="onBlueInput" placeholder="请输入0~255之间的数字" />
    </div>
</div>
<br>
<div class="hex-box">
    <div class="hex-row" @mouseenter="copyShow = true" @mouseleave="copyShow = false">
        <input class="hex-input" type="text" maxlength="7" v-model="hex" ref="hexInput" @input="onHEXInput" />
        <CopyButton class="copy-button" title="复制色号" :content="hex" :show="copyShow"></CopyButton>
    </div>
    <div class="color-block" :style="{ 'background-color': hex }"></div>
</div>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import CopyButton from '../../../components/ui/CopyButton.vue';
    import { dec2hex, hex2dec } from '../../../utils/CalcUtils.ts';

    const copyShow = ref(false);

    const red = ref('0');
    const green = ref('0');
    const blue = ref('0');

    const hex = ref('#000000');

    const onRedInput = ( evt: Event ) => {
        red.value = red.value.replace(/\D/g, '');
        if ( red.value > 255 ) {
            red.value = red.value.slice(0, -1);
        }
        hex.value = '#' + dec2hex( red.value ) + dec2hex( green.value ) + dec2hex( blue.value );
    }

    const onGreenInput = ( evt: Event ) => {
        green.value = green.value.replace(/\D/g, '');
        if ( green.value > 255 ) {
            green.value = green.value.slice(0, -1);
        }
        hex.value = '#' + dec2hex( red.value ) + dec2hex( green.value ) + dec2hex( blue.value );
    }

    const onBlueInput = ( evt: Event ) => {
        blue.value = blue.value.replace(/\D/g, '');
        if ( blue.value > 255 ) {
            blue.value = blue.value.slice(0, -1);
        }
        hex.value = '#' + dec2hex( red.value ) + dec2hex( green.value ) + dec2hex( blue.value );
    }

    const onHEXInput = () => {
        hex.value = hex.value.replace(/[^0-9a-f]/gi, '');
        hex.value = hex.value.toLocaleUpperCase();
        if ( !hex.value.startsWith("#") ) {
            hex.value = "#" + hex.value;
        }
        red.value = hex2dec( hex.value.slice( 1, 3 ));
        green.value = hex2dec( hex.value.slice( 3, 5 ));
        blue.value = hex2dec( hex.value.slice( 5 ));
    }

</script>

<style scoped>
    .rbg-row {
        height: 36px;
        margin: 10px 0;
        line-height: 36px;
        display: flex;
    }
    input.rgb-input {
        flex: 1;
        border-radius: 8px;
    }
    input.hex-input {
        font-size: 24px;
        padding: 0 15px;
    }
    .hex-box {
        height: 200px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .hex-box .hex-row {
        height: 60px;
        border-bottom: 1px solid var(--vp-c-divider);
        position: relative;
    }
    .hex-box .hex-row .copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .hex-box .color-block {
        flex: 1;
    }
</style>