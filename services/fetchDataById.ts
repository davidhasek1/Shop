import { url } from '../config'

export const fetchDataById = async (id: string, path: string) => {
  const apiCall = await fetch(`${url}/${path}/${id}`)
  const data = await apiCall.json()

  console.log('FETCHED DATA', data)
  return data ? data : {}
}
