const FavouriteProductsPage = (req, res) => {
  res.status(200).json([
    {
      id: 4,
      title: "FAV Product #1",
      description: "This is FAV product #1!",
    },
    {
      id: 5,
      title: "FAV Product #2",
      description: "This is FAV product #2!",
    },
    {
      id: 6,
      title: "FAV Product #3",
      description: "This is FAV product #3!",
    },
  ]);
};

export default FavouriteProductsPage;
