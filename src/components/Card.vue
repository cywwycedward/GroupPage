<template>
    <div>
        <canvas ref="threeCanvas" id="three"></canvas>
    </div>
</template>

<script setup>
import { ref, render } from 'vue'
import * as THREE from 'three'

const threeCanvas=ref()
const scene=new THREE.Scene()
scene.background=new THREE.Color('#eee')
const renderer = new THREE.WebGLRenderer({ threeCanvas, antialias: true })  
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

</script>

<style lang="scss" scoped>
#three {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>