---
    layout: doc
---

### 图片转Base64
<br>
<div class="file-area"
    @click="onFileClick"
    @drop="onFileDrop"
    @dragover.prevent
    @dragenter.prevent
></div>
<input type="file" ref="fileInput" hidden accept="image/png, image/jpeg" @change="onFileChange" />
<br>
<CodeArea :code="baseCode"></CodeArea>

<script setup lang='ts'>
    import { ref } from 'vue';
    import CodeArea from '../../../components/CodeArea.vue';

    const fileInput = ref(null);
    const baseCode = ref('');

    const onFileClick = () => {
        const event: MouseEvent = new MouseEvent('click');
        fileInput.value.dispatchEvent( event );
    }

    const onFileChange = ( evt: Event ) => {
        encode( evt.target.files );
    }

    const onFileDrop = ( evt: Event ) => {
        event.preventDefault();
        encode( evt.dataTransfer.files );
    }

    const encode = ( files: FileList ) => {
        const file: File = files[0];
        const reader: FileReader = new FileReader();
        reader.readAsDataURL( file );
        reader.onload = ( e: Event ) => {
            baseCode.value = e.target.result;
        }
    }

</script>

<style scoped>
    .file-area {
        width: 100%;
        height: 300px;
        box-sizing: border-box;
        padding: 140px 20px;
        background: field url(/icons/image-upload.svg) no-repeat center 60px;
        background-size: 64px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
    }
    .file-area::before {
        display: block;
        content: '拖曳图片到此处，或点击此处选择图片';
    }
    .file-area::after {
        display: block;
        content: '只支持单图片上传';
        font-size: 20px;
    }
</style>