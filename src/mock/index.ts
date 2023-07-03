import { createProdMockServer } from 'vite-plugin-mock/dist/client'

const modules:Record<string, any> = import.meta.glob('./modules/*.(ts|js)', { eager: true })
const allApi: any[] = []
for (const path in modules) {
  allApi.push(...modules[path].default)
}
export function setupMock() {
  createProdMockServer(Object.values(modules)).then(() => {
    console.log('mock服务加载成功~')
  })
}

