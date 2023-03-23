<template>
  <header v-if="config.headerHtml" v-html="config.headerHtml"/>
  <footer v-if="config.footerHtml" v-html="config.footerHtml"/>
</template>

<script setup lang="ts">
import {config} from "assets/config";

const primaryColor = config.theme.primaryColor
const secondaryColor = config.theme.secondaryColor
const textColor = config.theme.textColor

const computedHeaderAndFooterBackgroundColor = `${primaryColor}AA`
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  padding: 10px;

  background-color: v-bind(primaryColor);
  text-align: center;
  color: v-bind(textColor);
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
  padding: 10px;

  background-color: v-bind(computedHeaderAndFooterBackgroundColor);
  text-align: center;
  color: v-bind(textColor);
}

footer :deep(a) {
  color: v-bind(secondaryColor);
}
</style>