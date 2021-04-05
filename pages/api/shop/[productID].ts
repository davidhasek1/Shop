import { connect } from "../../../utils/db";
import mongodb from "mongodb";

const getSingleProduct = async (req, res) => {
  const { db } = await connect();
  const productID = req.query.productID;
  try {
    const productById = await db
      .collection("products")
      .findOne({ _id: new mongodb.ObjectId(productID) });
      
    res.json(productById);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default getSingleProduct;
