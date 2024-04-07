<template>
    <div ref="map" id="map">

    </div>
</template>

<script setup>
import { ref,onMounted} from 'vue'
import {Map,View} from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import 'ol/ol.css'

const map=ref(null)
function initMap () {
  // 地图实例
  map.value = new Map({
    target: 'map',                         // 对应页面里 id 为 map 的元素
    layers: [                              // 图层
      new Tile({                           // 使用瓦片渲染方法
        source: new XYZ({
            url:`http://t0.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}&l={z}&tk=23796fd920dd90cd47033db3f5862a7a`
        })                 // 图层数据源
      })
    ],
    view: new View({                       // 地图视图
      projection: "EPSG:4326",             // 坐标系，有EPSG:4326和EPSG:3857
      center: [114.064839, 22.548857],
      minZoom:5,                          // 地图缩放最小级别
      zoom: 12                             // 地图缩放级别（打开页面时默认级别）
    })
  })
}

onMounted(() => {
  initMap()
})
</script>

<style lang="scss" scoped>
#map{
    width: 100%;
    height: 100%;

}
</style>