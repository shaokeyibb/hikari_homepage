<template>
  <header v-if="config.headerHtml" v-html="config.headerHtml"/>
  <footer v-if="config.footerHtml" v-html="config.footerHtml"/>
</template>

<script setup lang="ts">
import {config} from "assets/config";

const headerColor = config.theme.headerColor
const footerColor = config.theme.footerColor
const secondaryColor = config.theme.secondaryColor
const headerTextColor = config.theme.onHeaderTextColor
const footerTextColor = config.theme.onFooterTextColor
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-height: 10vh;
  overflow: auto;
  padding: 10px;

  background-color: v-bind(headerColor);
  text-align: center;
  color: v-bind(headerTextColor);

  z-index: 999;
}

header :deep(a) {
  color: v-bind(secondaryColor);
}

footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-height: 10vh;
  overflow: auto;
  padding: 10px;

  background-color: v-bind(footerColor);
  text-align: center;
  color: v-bind(footerTextColor);

  z-index: 999;
}

footer :deep(a) {
  color: v-bind(secondaryColor);
}
</style>