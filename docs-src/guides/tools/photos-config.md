---
    layout: page
    sidebar: false
---

<MainWrapper>
    <div class="form">
        <label for="fileChooser">选择文件夹</label>
        <input type="file" ref="fileInput" id="fileChooser" webkitdirectory @change="buildConfig" />
    </div>
</MainWrapper>

<script setup lang='ts'>
    import { ref } from 'vue';
    import MainWrapper from '../../components/MainWrapper.vue';
    import { buildPhotoConfig } from '../../utils/PhotoUtils.ts';
    import FileSaver from 'file-saver';

    const fileInput = ref();

    const buildConfig = ( evt: Event ) => {
        const files = evt.target.files;
        const json: any = buildPhotoConfig(files);
        const blob: Blob = new Blob([ JSON.stringify( json ) ], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs( blob, 'config.json' );
    }

</script>

<style scoped>
    .form {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
    label {
        display: inline-block;
        width: 100%;
        height: 44px;
        border-radius: 4px;
        background-color: #f56c6c;
        font-size: 16px;
        line-height: 44px;
        cursor: pointer;
    }
    input[type=file] {
        display: none;
    }
</style>