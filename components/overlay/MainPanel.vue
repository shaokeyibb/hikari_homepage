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