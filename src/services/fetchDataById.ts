import { url } from 'config'

export const fetchDataById = async (id: string, path: string) => {
  try {
    const apiCall = await fetch(`${url}/${path}/${id}`)
    const data = await apiCall.json()

    console.log('FETCHED DATA', data)
    return data ? data : {}
  } catch (error) {
    console.log('FETCHED DATA FAILED', error.message)
  }
}
