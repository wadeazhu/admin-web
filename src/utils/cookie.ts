export function getCookie(name): undefined|string {
  const cookieArr:string[] = document.cookie.split(';')
  let value = undefined
  cookieArr.forEach((cookie: string) => {
    const [key, val] = cookie.split('=')
    if (key === name) value = val
  })
  return value
}
