import { url } from '../config'

export const fetchCart = async (id: string) => {
  const product = await fetch(`${url}/products/${id}`)
  const data = product.json()
  return data ? data : {}
}
