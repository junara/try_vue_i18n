import { createI18n } from 'vue-i18n'

// Import locale messages
import { en, ja, zh, fr } from './locales'

// Type for messages
export type MessageSchema = typeof ja

// Create i18n instance
export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: {
    zh: ['ja'],
    default: ['en', 'ja'], // fallback locale
  },
  messages: {
    en,
    ja,
    zh,
    fr,
  },
})
