<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/i18n.ts'

defineProps<{
  msg: string
}>()

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <i18n-t keypath="welcome.success_message" tag="span">
        <template #vite>
          <a href="https://vite.dev/" target="_blank" rel="noopener">{{ t('links.vite') }}</a>
        </template>
        <template #vue>
          <a href="https://vuejs.org/" target="_blank" rel="noopener">{{ t('links.vue') }}</a>
        </template>
      </i18n-t>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
