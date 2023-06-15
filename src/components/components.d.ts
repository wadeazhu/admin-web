import Form from '@/components/CommonForm/Form.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CommonForm: typeof Form
  }
}
