import { connect } from "../../../../utils/db";
import mongodb from "mongodb";
const singleFavProduct = async (req, res) => {
  const { db } = await connect();
  const favProductID = req.query.favProductID;
  try {
    const favProduct = await db
      .collection("favouriteProducts")
      .findOne({ _id: mongodb.ObjectID(favProductID) });

    res.json([favProduct]);
  } catch (error) {
    console.error("single favourite product fetch from DB failed");
  }
};

export default singleFavProduct;
