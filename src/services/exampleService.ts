export const MockFetchData = (value: number) => {
  const mockRespones = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
  return mockRespones
}
