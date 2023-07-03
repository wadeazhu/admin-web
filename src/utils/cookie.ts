export function getCookie(name): undefined|string {
  const cookieArr:string[] = document.cookie.split(';')
  let value = undefined
  cookieArr.forEach((cookie: string) => {
    const [key, val] = cookie.split('=')
    if (key === name) value = val
  })
  return value
}

export function clearCookie(): void {
  const keys = document.cookie.match(/[^=;]+(?==)/g)
  if (keys) {
    for (let i = 0 ; i < keys.length; i++) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}
