import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, updateProduct, state, dispatch }) => {
  return (
    <ul className="product__list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          updateProduct={updateProduct}
          state={state}
          dispatch={dispatch}
        />
      ))}
    </ul>
  );
};

export default ProductList;
