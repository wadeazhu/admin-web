/// <reference types="vite/client" />

import CommonForm2 from '@/components/Form.vue'

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@vue/runtime-core5' {
  export interface GlobalComponents {
    Common: typeof CommonForm2
  }
}
