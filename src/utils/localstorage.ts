export const loadState = (): {} | undefined => {
  try {
    const storedState = localStorage.getItem('state')
    if (storedState === null) {
      return undefined
    }
    return JSON.parse(storedState)
  } catch (error) {
    console.error('[LOCAL STORAGE LOAD ERROR]:', error)
    return undefined
  }
}

export const saveState = (state: any): void => {
  try {
    const storedState = JSON.stringify(state)
    localStorage.setItem('state', storedState)
  } catch (error) {
    console.error('[LOCAL STORAGE SAVE ERROR]:', error)
  }
}
