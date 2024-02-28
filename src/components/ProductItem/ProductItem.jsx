import "./ProductItem.css";
import { Button, Counter } from "../index";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const { imageUrl, name, ingredients, unitPrice, soldOut } = product;
  const ingredientsFormatted = ingredients.join(", ");
  const [productAmount, setProductAmount] = useState(0);

  const addToCart = () => {
    setProductAmount(1);
  };

  const deleteFromCart = () => {
    setProductAmount(0);
  };

  const changeProductAmount = (newAmount) => {
    setProductAmount(newAmount);
  };

  const getActionTemplate = () => {
    if (soldOut) {
      return (
        <Button theme="disable" className="product__btn">
          Sold out
        </Button>
      );
    }
    if (productAmount === 0) {
      return (
        <Button theme="primary" className="product__btn" onClick={addToCart}>
          Add to cart
        </Button>
      );
    }

    return (
      <Button theme="primary" className="product__btn" onClick={deleteFromCart}>
        Delete
      </Button>
    );
  };

  return (
    <li className="product">
      <img src={imageUrl} className="product__image" />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__ingredients">{ingredientsFormatted}</p>
        <div className="product__actions">
          <p className="product__price">${unitPrice}</p>
          {productAmount !== 0 && (
            <Counter
              count={productAmount}
              onChange={changeProductAmount}
              className="product__counter"
            />
          )}
          {getActionTemplate()}
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
