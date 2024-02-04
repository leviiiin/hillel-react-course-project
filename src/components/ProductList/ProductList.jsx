/* eslint-disable react/jsx-key */
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({pizzas}) => {
  return (
    <ul className="product__list">
      {pizzas.map(pizza => (<ProductItem product={pizza}/>))}
    </ul>
  );
};

export default ProductList;
