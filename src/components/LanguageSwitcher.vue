<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'

const { locale } = useI18n()
const showDropdown = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const switchLanguage = (lang: string) => {
  locale.value = lang
  showDropdown.value = false
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})

const getLanguageLabel = (lang: string) => {
  switch (lang) {
    case 'en':
      return 'English'
    case 'ja':
      return '日本語'
    case 'zh':
      return '中文'
    case 'fr':
      return 'Français'
    default:
      return lang
  }
}
</script>

<template>
  <div class="language-switcher" ref="dropdownRef">
    <button @click.stop="toggleDropdown" class="language-button">
      {{ getLanguageLabel(locale) }}
    </button>
    <div v-if="showDropdown" class="language-dropdown">
      <button
        v-for="lang in ['en', 'ja', 'zh', 'fr']"
        :key="lang"
        @click.stop="switchLanguage(lang)"
        :class="{ active: locale === lang }"
      >
        {{ getLanguageLabel(lang) }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.language-button:hover {
  background-color: #33a06f;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 120px;
}

.language-dropdown button {
  background-color: transparent;
  color: #333;
  text-align: left;
  padding: 8px 16px;
  border-radius: 0;
  border-bottom: 1px solid #eee;
}

.language-dropdown button:last-child {
  border-bottom: none;
}

.language-dropdown button:hover {
  background-color: #f5f5f5;
}

.language-dropdown button.active {
  background-color: #e6f7f1;
  color: #42b883;
  font-weight: bold;
}
</style>
