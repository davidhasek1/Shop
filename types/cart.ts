export type CartPayload = {
  Description: string
  Images: any
  Price: number
  ShortDescription: string
  Title: string
  createdAt: Date
  id: string
  published_at: Date
  updatedAt: Date
  _id: string
}

export type CartItemType = {
  productID: any
  imageUrl: string
  title: string
  price: number
  quantity: number
  itemTotal: number
}
