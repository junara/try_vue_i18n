<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchLanguage = () => {
  // Toggle between 'en' and 'ja'
  locale.value = locale.value === 'en' ? 'ja' : 'en'
}
</script>

<template>
  <div class="language-switcher">
    <button @click="switchLanguage">
      {{ locale === 'en' ? '日本語' : 'English' }}
    </button>
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #33a06f;
}
</style>
