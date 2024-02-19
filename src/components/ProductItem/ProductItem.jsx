import "./ProductItem.css";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = product;
  const ingredientsFormatted = ingredients.join(", ");

  const [showCounter, setShowCounter] = useState(false);

  const addToCart = () => {
    setShowCounter(true);
  };

  return (
    <li className="product">
      <img src={imageUrl} className="product__image" />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__ingredients">{ingredientsFormatted}</p>
        <div className="product__actions">
          <p className="product__price">${unitPrice}</p>
          {showCounter && <Counter className="product__counter" />}
          {!soldOut ? (
            <Button
              theme="primary"
              className="product__btn"
              onClick={addToCart}
            >
              Add to cart
            </Button>
          ) : (
            <Button theme="disable" className="product__btn">
              Sold out
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
