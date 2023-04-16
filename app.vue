<template>
  <Background/>
  <HeaderAndFooter/>

  <MainPanel>
    <div class="avatar-container">
      <Avatar v-if="config.avatar"
              :type="config.avatar.type"
              :value="config.avatar.value"
              :image-type="config.avatar.imageType"
              :size="avatarSize"/>
    </div>
    <div class="description-container">
      <h1 class="animated-underline-text">{{ config.name }}</h1>
      <p v-if="config.slogan">{{ config.slogan }}</p>
    </div>
    <div v-if="config.socialMedia" class="social-media-container">
      <template v-for="element in config.socialMedia">
        <SocialMediaButton class="social-media-container___child" :name="element.name" :url="element.url"/>
      </template>
    </div>
    <div class="extra-html-container" v-if="config.extraHtml" v-html="config.extraHtml"/>
  </MainPanel>
</template>

<script setup lang="ts">
import {config, head, seoMeta} from "assets/config";
import HeaderAndFooter from "~/components/overlay/HeaderAndFooter.vue";
import Background from "~/components/overlay/Background.vue";
import MainPanel from "~/components/overlay/MainPanel.vue";
import SocialMediaButton from "~/components/SocialMediaButton.vue";

const primaryColor = config.theme.primaryColor
const secondaryColor = config.theme.secondaryColor
const surfaceColor = config.theme.surfaceColor
const textColor = config.theme.onSurfaceTextColor

const computedAnimatedUnderlineTextBackground = `linear-gradient(to right, ${secondaryColor}, ${secondaryColor}) no-repeat left bottom`

const avatarSize = 256
const computedAvatarSize = `${avatarSize}px`

useHead(head)
useServerSeoMeta(seoMeta)
</script>

<style>
/* Reset the user agent stylesheet */
body {
  margin: 0;
  padding: 0;
}

.animated-underline-text {
  background: v-bind(computedAnimatedUnderlineTextBackground);
  background-size: 0 2px;
  transition: background-size .5s;
}

.animated-underline-text:hover {
  background-size: 100% 2px;
}

.avatar-container {
  width: v-bind(computedAvatarSize);
  height: v-bind(computedAvatarSize);
  flex-shrink: 0;

  transition: .5s;
}

.avatar-container:hover {
  transform: rotate(360deg);
  transition: .5s;
}

.description-container h1 {
  color: v-bind(textColor);
  font-weight: 700;
}

.description-container p {
  color: v-bind(textColor);
  font-weight: 400;
}

.social-media-container {
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: center;
}
</style>