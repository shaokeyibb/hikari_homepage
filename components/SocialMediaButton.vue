<template>
  <div class="button-container">
    <a :href="url" target="_blank">
      <span>{{ name }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import {config} from "assets/config";

defineProps<{
  name: string,
  url: string,
}>()

const primaryColor = config.theme.primaryColor
const textColor = config.theme.textColor
</script>

<style scoped>
.button-container {
  display: inline-flex;

  overflow: hidden;
  line-height: 2;

  border-radius: 5px;

  height: 52px;
  min-width: 92px;

  padding: 0 20px;
  margin: 10px;

  background: v-bind(primaryColor);

  transition: .3s;
}

.button-container:hover{
  box-shadow: 0 0 0 6px v-bind(primaryColor);
  opacity: 0.5;
}

.button-container a {
  width: 100%;
  height: 100%;

  color: v-bind(textColor);
  text-decoration: none;
}

.button-container a span{
  display: flex;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
}

</style>