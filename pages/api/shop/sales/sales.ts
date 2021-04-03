const SaleProducts = (req, res) => {
  res.json([
    {
      id: 7,
      title: "Sale Product #1",
      description: "This is product in Sale #1!",
    },
    {
      id: 8,
      title: "Sale Product #2",
      description: "This is product in Sale #2!",
    },
    {
      id: 9,
      title: "Sale Product #3",
      description: "This is product in Sale #3!",
    },
  ]);
};

export default SaleProducts;
