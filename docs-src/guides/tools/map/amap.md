---
    layout: doc
---

### 高德地图
<div id="container"></div>

<script setup lang='ts'>
    import { onMounted, onUnmounted } from 'vue';
    import { AMap } from '../../../configs/map/maps';

    window._AMapSecurityConfig = {
        securityJsCode: AMap.security
    }

    let amap: any = null;
    let centerX: number = 116.397428;
    let centerY: number = 39.90923;
    let AMapLoader: any = null;

    const initMap = () => {
        AMapLoader.load({
            key: AMap.key,
            version: '2.0',
            plugins: [
                'AMap.ElasticMarker',
                'AMap.ToolBar',
                'AMap.Scale',
                'AMap.HawkEye',
                'AMap.ControlBar',
                'AMap.MapType',
                'AMap.Geolocation',
                'AMap.AutoComplete',
                'AMap.PlaceSearch',
                'AMap.DistrictSearch',
                'AMap.LineSearch',
                'AMap.StationSearch',
                'AMap.Driving',
                'AMap.TruckDriving',
                'AMap.Transfer',
                'AMap.Walking',
                'AMap.Riding',
                'AMap.DragRoute',
                'AMap.Geocoder',
                'AMap.CitySearch',
                'AMap.IndoorMap',
                'AMap.MouseTool',
                'AMap.CircleEditor',
                'AMap.PolygonEditor',
                'AMap.PolylineEditor',
                'AMap.RectangleEditor',
                'AMap.EllipseEditor',
                'AMap.BezierCurveEditor',
                'AMap.MarkerCluster',
                'AMap.RangingTool',
                'AMap.CloudDataSearch',
                'AMap.Weather',
                'AMap.HeatMap',
            ],
        }).then(( AMap: any ) => {
            amap = new AMap.Map('container', {
                viewMode: '3D',
                zoom: 11,
                center: [ centerX, centerY ],
            });

            // 工具条，控制地图的缩放、平移等
            const toolbar: AMap.ToolBar = new AMap.ToolBar({
                position: 'RT',
            });
            amap.addControl( toolbar );

            // 比例尺，显示当前地图中心的比例尺
            const scalebar: AMap.Scale = new AMap.Scale();
            amap.addControl( scalebar );

            // 鹰眼，用于显示缩略地图，显示于地图右下角，可以随主图的视口变化而变化
            const hawkEye: AMap.HawkEye = new AMap.HawkEye({
                autoMove: true,
                showRectangle: true,
                width: '128px',
                height: '128px',
            });
            amap.addControl( hawkEye );

            // 组合了旋转、倾斜、复位在内的地图控件
            const controlbar: AMap.ControlBar = new AMap.ControlBar();
            amap.addControl( controlbar );

            // 浏览器定位，提供了获取用户当前准确位置、所在城市的方法
            const geolocation: AMap.Geolocation = new AMap.Geolocation({
                position: 'LB',
                offset: [ 12, 64 ],
                timeout: 10000,
                needAddress: true,
            });
            amap.addControl( geolocation );

            geolocation.getCurrentPosition(( status: string, result: any ) => {
                console.log( status, result );
            });

        }).catch(( err: Error ) => {
            console.log( err );
        })
    }

    onMounted(() => {
        import('@amap/amap-jsapi-loader').then( module => {
            AMapLoader = module.default;
            initMap();
        });
    })

    onUnmounted(() => {
        amap?.destroy();
    })

</script>

<style scoped>
    #container {
        width: 100%;
        height: 600px;
        margin: 30px auto 0;
    }
    :global(.amap-controls),
    :global(.amap-toolbar) {
        z-index: 0;
    }
</style>