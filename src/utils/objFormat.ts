export function object2FormData(obj: any): FormData {
  const formData = new FormData()
  for (const k in obj) {
    formData.append(k, obj[k])
  }
  return formData
}
