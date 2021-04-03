import { connect } from "../../../utils/db";
//MAIN shop page - all products page
const getAllProducts = async (req, res) => {
  const { db } = await connect();
  try {
    const products = await db.collection("products").find().toArray();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default getAllProducts;
