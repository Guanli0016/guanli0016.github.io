<template>
    <div class="clock-wrapper" ref="wrapper">
        <canvas ref="canvasRef"></canvas>
    </div>
</template>

<script setup lang='ts'>
    import { ref, onMounted } from 'vue';

    const wrapper = ref<HTMLDivElement>();
    const canvasRef = ref<HTMLCanvasElement>();

    const numerals: string[] = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII' ];

    const drawClock = () => {

        const canvas: HTMLCanvasElement = canvasRef.value as HTMLCanvasElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
        const now: Date = new Date();

        const width: number = canvas.width;
        const height: number = canvas.height;
        const fw: number = width / 8;

        const silveryGradient: CanvasGradient = ctx.createLinearGradient( 0, height, width, 0 );
        silveryGradient.addColorStop( 0, '#A4A4A4' );
        silveryGradient.addColorStop( 1, '#FFFFFF' );
        
        const bgGradient: CanvasGradient = ctx.createLinearGradient( 0, height, width, 0 );
        bgGradient.addColorStop( 0, '#800000' );
        bgGradient.addColorStop( 1, '#A52A2A' );

        ctx.save();
        ctx.clearRect( 0, 0, width, height );
        ctx.translate( width / 2, height / 2 );

        // 表盘
        ctx.beginPath();
        ctx.lineWidth = fw;
        ctx.strokeStyle = silveryGradient;
        ctx.fillStyle = bgGradient;
        ctx.arc( 0, 0, width / 2 - fw / 2, 0, Math.PI * 2 );
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        // 数字刻度
        ctx.save();
        ctx.translate( width / 2, height / 2 );
        for ( let i = 0; i < numerals.length; i++ ) {
            const text: TextMetrics = ctx.measureText( numerals[i] );
            ctx.beginPath();
            ctx.font = `${ height * 0.075 }px Agency FB`;
            ctx.strokeStyle = silveryGradient;
            ctx.lineWidth = 1;
            ctx.rotate( Math.PI / 6 );
            ctx.strokeText( numerals[i], -text.width / 2, - ( height / 2 - fw / 2 - height * 0.0625 ));
        }
        ctx.restore();

        const seconds = now.getSeconds();
        // 要显示扫秒式的时钟，请使用：
        // const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;

        // 时针
        ctx.save();
        ctx.translate( width / 2, height / 2 );
        ctx.rotate(
            ( Math.PI / 6 ) * ( hours - 3 )
            //  + ( Math.PI / 360 ) * minutes + ( Math.PI / 21600 ) * seconds
        );
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.strokeStyle = silveryGradient;
        ctx.moveTo( -( height * 0.046875 ), 0 );
        ctx.lineTo( height * 0.2375, 0 );
        ctx.stroke();
        ctx.restore();

        // 分针
        ctx.save();
        ctx.translate( width / 2, height / 2 );
        ctx.rotate(
            ( Math.PI / 30 ) * ( minutes - 15 )
            //  + ( Math.PI / 1800 ) * seconds
        );
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = silveryGradient;
        ctx.moveTo( -( height * 0.046875 ), 0 );
        ctx.lineTo( height * 0.34375, 0 );
        ctx.stroke();
        ctx.restore();

        // 秒针
        ctx.save();
        ctx.translate( width / 2, height / 2 );
        ctx.rotate(
            (( seconds - 15 ) * Math.PI ) / 30
        );
        ctx.strokeStyle = silveryGradient;
        ctx.fillStyle = silveryGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo( -( height * 0.046875 ), 0 );
        ctx.lineTo( height * 0.375, 0 );
        ctx.stroke();
        ctx.beginPath();
        ctx.arc( 0, 0, 8, 0, Math.PI * 2, true );
        ctx.fill();
        ctx.beginPath();
        ctx.restore();

        window.requestAnimationFrame( drawClock );
    }

    let intervalId: NodeJS.Timeout;
    const onWindowResize = () => {
        ( canvasRef.value as HTMLCanvasElement ).width = ( wrapper.value as HTMLDivElement ).clientWidth;
        ( canvasRef.value as HTMLCanvasElement ).height = ( wrapper.value as HTMLDivElement ).clientHeight;
    }

    onMounted(() => {
        window.onresize = onWindowResize;
        onWindowResize();
        window.requestAnimationFrame( drawClock );
    })

</script>

<style scoped>
    /* .clock-wrapper canvas {
        width: 100%;
        height: 100%;
    } */
</style>