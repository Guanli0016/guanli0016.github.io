<template>
    <div class="background-sound-button" ref="wrapper" :class="{ playing: playing }" @click="togglePlay">
        <audio 
            preload="metadata"
            ref="player"
            @play="onAudioPlayed"
            @pause="onAudioPaused"
            @ended="onAudioEnded">
            <source :src="sounds[index]"></source>
        </audio>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import bgsounds from '../../configs/bgsounds.json';

    const playing = ref(false);
    const player = ref();
    const wrapper = ref();

    const sounds: string[] = bgsounds.sounds;
    const randomIndex: number = Math.floor( Math.random() * sounds.length );
    const index = ref<number>( randomIndex );
    
    const autoplay: boolean = true;

    const togglePlay = () => {
        if ( player.value.paused ) {
            player.value.play();
        } else {
            player.value.pause();
        }
    }

    const onAudioPlayed = () => {
        playing.value = true;
    }

    const onAudioPaused = () => {
        playing.value = false;
    }
    
    const onAudioEnded = () => {
        playing.value = false;
        index.value === sounds.length -1 ? index.value = 0 : index.value++;
        player.value.load();
        player.value.play();
    }

    const waitActived = ( evt: MouseEvent ) => {
        // document.removeEventListener( 'mousedown', waitActived );
        if ( evt.target === wrapper.value ) {
            return;
        }
        setTimeout(() => {
            player.value.play();
        });
    }

    onMounted(() => {
        if ( autoplay ) {
            player.value.load();
            player.value.play().then(() => {
                console.log("play success");
            }).catch(() => {
                console.log( "play faile" );
                document.addEventListener( 'mousedown', waitActived, {
                    once: true
                });
            });
        }
    })
</script>

<style scoped>
    .background-sound-button {
        width: 32px;
        height: 32px;
        background: url(/icons/audio-icon.svg);
        color: white;
        position: fixed;
        top: 126px;
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