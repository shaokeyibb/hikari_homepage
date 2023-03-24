<template>
  <div class="main-panel">
    <div class="main-panel___content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {config} from "assets/config";

const surfaceColor = config.theme.surfaceColor

const computedBorderRadius = config.borderRadius

let filter
let shadow

function injectPanel() {
  if (!config.panel) return

  function injectFilter() {
    filter = ""

    if (!config.panel || !config.panel.filter) return

    if (config.panel.filter.blur) {
      filter += `blur(${config.panel.filter.blur}) `
    }
    if (config.panel.filter.brightness) {
      filter += `brightness(${config.panel.filter.brightness}) `
    }
    if (config.panel.filter.contrast) {
      filter += `contrast(${config.panel.filter.contrast}) `
    }
    if (config.panel.filter.dropShadow) {
      filter += `drop-shadow(${config.panel.filter.dropShadow}) `
    }
    if (config.panel.filter.grayscale) {
      filter += `grayscale(${config.panel.filter.grayscale}) `
    }
    if (config.panel.filter.hueRotate) {
      filter += `hue-rotate(${config.panel.filter.hueRotate}) `
    }
    if (config.panel.filter.invert) {
      filter += `invert(${config.panel.filter.invert}) `
    }
    if (config.panel.filter.opacity) {
      filter += `opacity(${config.panel.filter.opacity}) `
    }
    if (config.panel.filter.saturate) {
      filter += `saturate(${config.panel.filter.saturate}) `
    }
    if (config.panel.filter.sepia) {
      filter += `sepia(${config.panel.filter.sepia}) `
    }
  }

  function injectShadow() {
    shadow = ""

    if (!config.panel || !config.panel.shadow) return

    if (config.panel.shadow.offsetX) {
      shadow += `${config.panel.shadow.offsetX} `
    }
    if (config.panel.shadow.offsetY) {
      shadow += `${config.panel.shadow.offsetY} `
    }
    if (config.panel.shadow.blurRadius) {
      shadow += `${config.panel.shadow.blurRadius} `
    }
    if (config.panel.shadow.spreadRadius) {
      shadow += `${config.panel.shadow.spreadRadius} `
    }
    if (config.panel.shadow.color) {
      shadow += `${config.panel.shadow.color} `
    }
  }

  injectFilter()
  injectShadow()
}

injectPanel()
</script>

<style scoped>
.main-panel {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);

  width: 70vw;
  height: 70vh;
  background-color: v-bind(surfaceColor);
  backdrop-filter: v-bind(filter);
  box-shadow: v-bind(shadow);

  border-radius: v-bind(computedBorderRadius);

  padding: 20px;
}

.main-panel___content {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  width: 100%;
  height: 100%;

  overflow: auto;
}
</style>