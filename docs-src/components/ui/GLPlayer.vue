<template>
    <div class="background-sound-button" :class="{ playing: playing }" @click="togglePlay"></div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { Howl } from 'howler';
    import bgaudio from '../../configs/bgaudio.json';

    let playing = ref(false);
    let player;

    const togglePlay = () => {
        if ( playing.value ) {
            player.pause();
        } else {
            player.play();
        }
    }

    const onAudioPlayed = () => {
        playing.value = true;
    }

    const onAudioPaused = () => {
        playing.value = false;
    }

    const onAudioStoped = () => {
        playing.value = false;
    }

    onMounted(() => {
        player = new Howl({
            src: bgaudio.sounds,
            loop: true,
            autoplay: true,
            onplay: onAudioPlayed,
            onpause: onAudioPaused,
            onstop: onAudioStoped,
        })
    })
</script>

<style scoped>
    .background-sound-button {
        width: 32px;
        height: 32px;
        background: url(/icons/audio-icon.svg);
        color: white;
        position: fixed;
        top: 84px;
        right: 20px;
        cursor: pointer;
    }
    .background-sound-button.playing {
        animation: rotate 2s linear 0s infinite;
    }

    @keyframes rotate {
        from { transform: rotate(0); }
        to { transform: rotate(360deg); }
    }
</style>