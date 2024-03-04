import "./ProductList.css";
import { ProductItem } from "../index";

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