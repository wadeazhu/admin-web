import { App } from 'vue'
import Antd from 'ant-design-vue'
import CommonForm from '@/components/CommonForm/Form.vue'

export function registerGlobComp(app: App<Element>) {
  app.use(Antd)
  app.component('CommonForm', CommonForm)
}
