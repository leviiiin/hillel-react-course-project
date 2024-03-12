import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, updateProduct }) => {
  return (
    <ul className="product__list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          updateProduct={updateProduct}
        />
      ))}
    </ul>
  );
};

export default ProductList;
