<template>
  <div class="green-cube">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
import THREE from 'three'
export default {
  mounted() {
    console.log(THREE)
  }
}
</script>

<style lang="stylus">
canvas {
  width 100%
  height 100%
  background-color #111
  border-radius 6px
}
</style>
