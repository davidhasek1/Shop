import { connect } from "utils/db"
import mongodb from "mongodb"

const getSingleProduct = async (req, res) => {
  const { db } = await connect()
  const ID = req.query.favouriteID
  try {
    const products = await db
      .collection("page_favourite_products")
      .findOne({ _id: mongodb.ObjectID(ID) })
    console.log(products)
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}

export default getSingleProduct
