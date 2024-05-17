---
    layout: doc

    title: 二维码生成器
---

### 二维码生成器
<br>
<div class="qrcode-setup">
    <div class="setup-row">
        网址或文本：<input class="setup-input GLInput" type="text" v-model="content" placeholder="请输入网址或文本" />
    </div>
    <div class="setup-row">
        二维码尺寸：<input class="setup-input GLInput" type="text" v-model="size" placeholder="请输入二维码像素尺寸（41 ~ 2048）" maxlength="4" @input="onSizeInput" />
    </div>
    <div class="setup-row">
        空白区宽度：<input class="setup-input GLInput" type="text" v-model="margin" placeholder="请输入二维码空白区域宽度（0 ~ 9）" maxlength="1" @input="onMarginInput" />
    </div>
    <div class="setup-row">
        颜色（RGBA）：<input class="setup-input GLInput color-input" type="text" v-model="color" placeholder="请输入二维码颜色（RGBA）" maxlength="9"  @input="onColorInput" />
        <el-color-picker v-model="color" show-alpha color-format="hex" />
    </div>
    <div class="setup-row">
        背景（RGBA）：<input class="setup-input GLInput color-input" type="text" v-model="bgcolor" placeholder="请输入背景颜色（RGBA）" maxlength="9"  @input="onBGColorInput" />
        <el-color-picker v-model="bgcolor" show-alpha color-format="hex" />
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

    const content = ref('https://www.liuguanli.com/');
    const size = ref(256);
    const margin = ref(4);
    const color = ref('#000000FF');
    const bgcolor = ref('#FFFFFFFF');

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
            const options: any = {
                type: 'image/png',
                width: size.value || 256,
                margin: margin.value || 0,
                errorCorrectionLevel: 'H',
                maskPattern: 1,
                color: {
                    dark: color.value || '#000000',
                    light: bgcolor.value || '#FFFFFF'
                }
            }
            QRCode.toDataURL( content.value, options ).then(( url: string ) => resolve( url ));
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

    const onBGColorInput = () => {
        bgcolor.value = bgcolor.value.replace(/[^0-9a-f]/gi, '').toLocaleUpperCase();
        if ( !bgcolor.value.startsWith("#") ) {
            bgcolor.value = "#" + bgcolor.value;
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
    }
    input.color-input {
        border-radius: 4px 0 0 4px;
    }
    
    .buttons {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .buttons button {
        margin: 0 10px;
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