<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { useI18n } from 'vue-i18n'
import type { MessageSchema } from '@/i18n.ts'

const { t } = useI18n<{ message: MessageSchema }>()
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ t('welcome.documentation.title') }}</template>
    <i18n-t keypath="welcome.documentation.description" tag="span">
      <a href="https://vuejs.org/" target="_blank" rel="noopener">{{ t('links.documentation') }}</a>
    </i18n-t>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ t('welcome.tooling.title') }}</template>
    <i18n-t keypath="welcome.tooling.description" tag="span">
      <template #0>
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">
          {{ t('links.vite') }}
        </a>
      </template>
      <template #1>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">
          {{ t('links.vscode') }}
        </a>
      </template>
      <template #2>
        <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener">
          {{ t('links.vue_official') }}
        </a>
      </template>
      <template #3>
        <a href="https://vitest.dev/" target="_blank" rel="noopener">
          {{ t('links.vitest') }}
        </a>
      </template>
      <template #4>
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">
          {{ t('links.cypress') }}
        </a>
      </template>
      <template #5>
        <a href="https://playwright.dev/" target="_blank" rel="noopener">
          {{ t('links.playwright') }}
        </a>
      </template>
    </i18n-t>

    <br />

    <i18n-t keypath="welcome.tooling.more_instructions" tag="span">
      <template #0>
        <a href="javascript:void(0)" @click="openReadmeInEditor">
          <code>{{ t('links.readme') }}</code>
        </a>
      </template>
    </i18n-t>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ t('welcome.ecosystem.title') }}</template>
    <i18n-t keypath="welcome.ecosystem.description" tag="span">
      <template #0>
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">
          {{ t('links.pinia') }}
        </a>
      </template>
      <template #1>
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">
          {{ t('links.vue_router') }}
        </a>
      </template>
      <template #2>
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">
          {{ t('links.vue_test_utils') }}
        </a>
      </template>
      <template #3>
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">
          {{ t('links.vue_dev_tools') }}
        </a>
      </template>
      <template #4>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">
          {{ t('links.awesome_vue') }}
        </a>
      </template>
    </i18n-t>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ t('welcome.community.title') }}</template>
    <i18n-t keypath="welcome.community.description" tag="span">
      <template #0>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
          {{ t('links.vue_land') }}
        </a>
      </template>
      <template #1>
        <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">
          {{ t('links.stackoverflow') }}
        </a>
      </template>
      <template #2>
        <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">
          {{ t('links.bluesky') }}
        </a>
      </template>
      <template #3>
        <a href="https://x.com/vuejs" target="_blank" rel="noopener">
          {{ t('links.twitter') }}
        </a>
      </template>
    </i18n-t>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ t('welcome.support.title') }}</template>
    <i18n-t keypath="welcome.support.description" tag="span">
      <template #0>
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">
          {{ t('links.becoming_sponsor') }}
        </a>
      </template>
    </i18n-t>
  </WelcomeItem>
</template>
