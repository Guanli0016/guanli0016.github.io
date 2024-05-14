---
    layout: doc
---

### 二维码生成器
<br>
<div class="qrcode-setup">
    <div class="setup-row">
        内容：<input class="setup-input" type="text" v-model="content" placeholder="请输入网址或文本" />
    </div>
    <div class="setup-row">
        尺寸：<input class="setup-input" type="text" v-model="size" placeholder="请输入二维码像素尺寸（41 ~ 2048）" maxlength="4" @input="onSizeInput" />
    </div>
    <div class="setup-row">
        空白：<input class="setup-input" type="text" v-model="margin" placeholder="请输入二维码空白区域宽度（0 ~ 9）" maxlength="1" @input="onMarginInput" />
    </div>
    <div class="setup-row">
        颜色：<input class="setup-input" type="text" v-model="color" placeholder="请输入二维码颜色" maxlength="7"  @input="onColorInput" />
    </div>
    <div class="buttons">
        <button class="GLButton" @click="buildQRCode">生成二维码</button>
        <button class="GLButton" blue @click="downloadQRCode">下载二维码</button>
    </div>
</div>
<br>
<div class="qrcode-viewer" v-if="!!qrcode">
    <img :src="qrcode" />
</div>

<script setup lang="ts">
    import { ref } from 'vue';
    import QRCode from 'qrcode';
    import FileSaver from 'file-saver';
    import { vValid, vMax } from '../../../directives/input';

    const content = ref('http://www.liuguanli.com/');
    const size = ref(256);
    const margin = ref(4);
    const color = ref('#000000');

    const qrcode = ref('');

    const buildQRCode = () => {
        build().then(( url: string ) => {
            qrcode.value = url;
        });
    }

    const downloadQRCode = () => {
        if ( !!qrcode.value ) {
            FileSaver.saveAs( qrcode.value, 'qrcode.png' );
        } else {
            build().then(( url: string ) => {
                FileSaver.saveAs( url, 'qrcode.png' );
            });
        }
    }

    const build = (): Promise<string> => {
        const callback = ( resolve, reject ) => {
            QRCode.toDataURL( content.value, {
                errorCorrectionLevel: 'H',
                type: 'image/png',
                margin: margin.value || 0,
                width: size.value || 256,
                color: {
                    dark: color.value || '#000000',
                    light: "#FFFFFFFF"
                }
            }).then(( url: string ) => {
                resolve( url );
            })
        }
        return new Promise( callback );
    }

    const onSizeInput = () => {
        size.value = size.value.replace( /\D/g, '' );
        if ( size.value > 2048 ) {
            size.value = size.value.slice( 0, -1 );
        }
    }

    const onMarginInput = () => {
        margin.value = margin.value.replace( /\D/g, '' );
        if ( margin.value > 9 ) {
            margin.value = margin.value.slice( 0, -1 );
        }
    }

    const onColorInput = () => {
        color.value = color.value.replace(/[^0-9a-f]/gi, '').toLocaleUpperCase();
        if ( !color.value.startsWith("#") ) {
            color.value = "#" + color.value;
        }
    }
</script>

<style scoped>
    .setup-row {
        height: 36px;
        margin: 10px 0;
        line-height: 36px;
        display: flex;
    }
    input.setup-input {
        flex: 1;
        border-radius: 8px;
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .buttons button {
        margin: 0 20px;
    }

    .qrcode-viewer {
        display: flex;
        justify-content: center;
    }
    .qrcode-viewer img {
        border: 1px solid #cccccc;
        max-width: 100%;
    }
</style>