<template>
  <div class="main-background"/>
</template>

<script setup lang="ts">
import {config} from "assets/config";

let background
let filter

function injectBackground() {
  if (!config.background) return

  function injectColor() {
    background = ""

    if (!config.background || !config.background.color) return

    switch (config.background.color.type) {
      case "linear-gradient":
        background = `linear-gradient(${config.background.color.value})`
        break
      case "radial-gradient":
        background = `radial-gradient(${config.background.color.value})`
        break
      case "repeating-linear-gradient":
        background = `repeating-linear-gradient(${config.background.color.value})`
        break
      case "repeating-radial-gradient":
        background = `repeating-radial-gradient(${config.background.color.value})`
        break
      case "conic-gradient":
        background = `conic-gradient(${config.background.color.value})`
        break
      case "url":
        background = `url(${config.background.color.value})`
        break
      case "basic":
        background = config.background.color.value
        break
      case "none":
        background = "none"
        break
    }
  }

  function injectFilter() {
    filter = ""

    if (!config.background || !config.background.filter) return

    if (config.background.filter.blur) {
      filter += `blur(${config.background.filter.blur}) `
    }
    if (config.background.filter.brightness) {
      filter += `brightness(${config.background.filter.brightness}) `
    }
    if (config.background.filter.contrast) {
      filter += `contrast(${config.background.filter.contrast}) `
    }
    if (config.background.filter.dropShadow) {
      filter += `drop-shadow(${config.background.filter.dropShadow}) `
    }
    if (config.background.filter.grayscale) {
      filter += `grayscale(${config.background.filter.grayscale}) `
    }
    if (config.background.filter.hueRotate) {
      filter += `hue-rotate(${config.background.filter.hueRotate}) `
    }
    if (config.background.filter.invert) {
      filter += `invert(${config.background.filter.invert}) `
    }
    if (config.background.filter.opacity) {
      filter += `opacity(${config.background.filter.opacity}) `
    }
    if (config.background.filter.saturate) {
      filter += `saturate(${config.background.filter.saturate}) `
    }
    if (config.background.filter.sepia) {
      filter += `sepia(${config.background.filter.sepia}) `
    }
  }

  injectColor()
  injectFilter()
}


injectBackground()
</script>

<style scoped>
.main-background {
  position: fixed;

  width: 100vw;
  height: 100vh;

  background: no-repeat v-bind(background);
  background-size: cover;

  filter: v-bind(filter);

  z-index: -1;
}
</style>