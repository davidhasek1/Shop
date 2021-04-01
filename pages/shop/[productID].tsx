const productDetail = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((product) => {
        return (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`http://localhost:3000/api/shop/all-products/`);
  const ids = await res.json(); //pole
  const arrayIDs = [];

  for (let key in ids) {
    let stringid = ids[key]._id.toString();
    arrayIDs.push({
      params: { productID: stringid },
    });
  }
  return {
    paths: arrayIDs,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:3000/api/shop/${params.productID}/`); //data pro jeden product
  const product = await res.json();
  return {
    props: {
      data: product,
    },
  };
};

export default productDetail;
