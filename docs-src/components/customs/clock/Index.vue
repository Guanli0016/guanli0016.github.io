<template>
    <div class="clock-wrapper" ref="wrapper">
        <canvas ref="canvasRef"></canvas>
    </div>
</template>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';
    import { drawClock } from './clock';

    const wrapper = ref<HTMLDivElement>();
    const canvasRef = ref<HTMLCanvasElement>();

    const onWindowResize = () => {
        ( canvasRef.value as HTMLCanvasElement ).width = ( wrapper.value as HTMLDivElement ).clientWidth;
        ( canvasRef.value as HTMLCanvasElement ).height = ( wrapper.value as HTMLDivElement ).clientHeight;
    }

    onMounted(() => {
        window.onresize = onWindowResize;
        onWindowResize();
        drawClock( canvasRef.value as HTMLCanvasElement );
    })

</script>

<style scoped>
    
</style>