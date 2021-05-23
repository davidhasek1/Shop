import { connect } from "utils/db"
import mongodb from "mongodb"

const getSingleProduct = async (req, res) => {
  const { db } = await connect()
  const ID = req.query.saleID
  try {
    const products = await db
      .collection("page_sale_products")
      .findOne({ _id: mongodb.ObjectID(ID) })
    console.log(products)
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}

export default getSingleProduct
