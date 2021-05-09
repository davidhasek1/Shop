import { connect } from "utils/db";
//Fetch data from DB - from collectino: favouriteProducts - returning favourite Products in the collection
const FavouriteProductsPage = async (req, res) => {
  const { db } = await connect();
  try {
    const favPorducts = await db
      .collection("favouriteProducts")
      .find()
      .toArray();
    console.log(favPorducts);
    res.json(favPorducts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default FavouriteProductsPage;
