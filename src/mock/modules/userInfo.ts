import { MockMethod } from 'vite-plugin-mock'

const mockMethod: MockMethod[] = [
  {
    url: '/login',
    method: 'get',
    response: ({ query }) => {
      console.log(query)
      return 'success'
    }
  }
]

export default mockMethod
