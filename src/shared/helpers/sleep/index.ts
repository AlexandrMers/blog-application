// eslint-disable-next-line
export const sleep = (duration = 300) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, duration)
  })
}
