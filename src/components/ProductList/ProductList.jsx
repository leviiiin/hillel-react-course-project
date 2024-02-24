import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <ul className="product__list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
