export const setItemToLocalStorage = <T>(key: string, payload: T): T => {
  localStorage.setItem(key, JSON.stringify(payload))
  return payload
}
