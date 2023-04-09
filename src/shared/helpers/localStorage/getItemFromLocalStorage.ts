export const getItemFromLocalStorage = <T>(key: string) => {
  const dataFromStorage = localStorage.getItem(key)

  if (!dataFromStorage) {
    return null
  }

  return JSON.parse(dataFromStorage) as T
}
