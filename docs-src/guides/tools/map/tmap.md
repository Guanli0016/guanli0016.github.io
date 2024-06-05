---
    layout: doc
---

### 腾讯地图
<div id="container"></div>

<script setup lang='ts'>
    import { onMounted, onUnmounted } from 'vue';
    import { TMapConfig } from '../../../configs/map/maps';

    let tmap: any = null;
    let centerLng: number = 116.397428;
    let centerLat: number = 39.90923;

    window.initMap = () => {

        const container: HTMLDivElement = document.getElementById('container');
        //定义地图中心点坐标
        const center = new TMap.LatLng( centerLat, centerLng );

        //定义map变量，调用 TMap.Map() 构造函数创建地图
        const tmap = new TMap.Map( container, {
            center: center, // 设置地图中心点坐标
            zoom: 12,       // 设置地图缩放级别
            viewMode: '3D' // 3D视图
        });
    }

    const loadScript = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${ TMapConfig.key }&callback=initMap`;
        document.body.appendChild( script );
    }

    onMounted(() => {
        loadScript();
    })

    onUnmounted(() => {
        
    })

</script>

<style scoped>
    #container {
        width: 100%;
        height: 600px;
        margin: 30px auto 0;
    }
    :global(.rotate-circle .rotate-top-img) {
        left: 10px !important;
        top: 12px !important;
    }
    :global(.rotate-circle .rotate-bottom-img) {
        left: 12px !important;
        top: 14px !important;
    }
</style>