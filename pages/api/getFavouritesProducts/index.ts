import { connect } from "utils/db"

const getFavouritesProducts = async (req, res) => {
  const { db } = await connect()
  try {
    const products = await db
      .collection("page_favourite_products")
      .find()
      .toArray()
    console.log(products)
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}

export default getFavouritesProducts
