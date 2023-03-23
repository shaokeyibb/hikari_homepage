<template>
  <div class="avatar"/>
</template>

<script setup lang="ts">
import {hashToMD5} from "~/utils/crypto";

const {type, size, value, imageType} = defineProps<{
  type: "gravatar" | "cravatar" | "qq" | "url"
  size?: number
  value: string
  imageType?: "normal" | "webp"
}>()

const computedSize = computed(() => {
  return size ?? 80
})

const computedImageType = computed(() => {
  return imageType ?? "webp"
})

function calcHash(email: string): string {
  return hashToMD5(email.trim().toLowerCase())
}

const computedSrc = computed(() => {
  switch (type) {
    case "gravatar":
      if (computedImageType.value === "webp") {
        return `url(https://gravatar.webp.se/avatar/${calcHash(value)}?s=${computedSize.value}&d=mp)`
      }
      return `url(https://www.gravatar.com/avatar/${calcHash(value)}?s=${computedSize.value}&d=mp)`
    case "cravatar":
      return `url(https://cravatar.cn/avatar/${calcHash(value)}?s=${computedSize.value}&d=mp)`
    case "qq":
      return `url(https://q1.qlogo.cn/g?b=qq&nk=${value}&s=${computedSize.value})`
    case "url":
      return `url(${value})`
  }
})

</script>

<style scoped>
.avatar {
  width: 100%;
  height: 100%;

  border-radius: 100%;

  background-image: v-bind(computedSrc);
  background-position: center center;
  background-repeat: no-repeat;
}
</style>