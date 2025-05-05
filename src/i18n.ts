import { createI18n } from 'vue-i18n'

// Import locale messages
import { en, ja } from './locales'

// Type for messages
export type MessageSchema = typeof en

// Create i18n instance
export const i18n = createI18n<[MessageSchema], 'en' | 'ja'>({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en,
    ja,
  },
})
