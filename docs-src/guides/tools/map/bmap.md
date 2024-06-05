---
    layout: doc
---

### 百度地图
<div id="container"></div>

<script setup lang='ts'>
    import { onMounted, onUnmounted } from 'vue';
    import { BMapConfig } from '../../../configs/map/maps';

    let bmap: any = null;
    let centerLng: number = 116.397428;
    let centerLat: number = 39.90923;

    window.initMap = () => {

        // 初始化地图
        bmap = new BMapGL.Map('container');

        // 设置中心点经纬度
        const center: BMapGL.Point = new BMapGL.Point( centerLng, centerLat );
        bmap.centerAndZoom( center, 12 );

        // 添加比例尺控件
        const scale: BMapGL.ScaleControl = new BMapGL.ScaleControl();
        bmap.addControl( scale );

        // 添加缩放控件
        const zoom: BMapGL.ZoomControl = new BMapGL.ZoomControl();
        bmap.addControl( zoom );

        // 添加定位控件
        const location: BMapGL.LocationControl = new BMapGL.LocationControl();
        bmap.addControl( location );
    }

    const loadScript = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ BMapConfig.key }&callback=initMap`;
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
</style>