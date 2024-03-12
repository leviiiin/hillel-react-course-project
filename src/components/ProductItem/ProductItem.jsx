import "./ProductItem.css";
import { Button } from "../index";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const ProductItem = ({ product, updateProduct }) => {
  const { imageUrl, name, ingredients, unitPrice, soldOut, id, qty } = product;
  const ingredientsFormatted = ingredients.join(", ");
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
    updateProduct(id, 1);
  };

  const handleIncrementItem = () => {
    dispatch({
      type: "INCREMENT_ITEM",
      payload: id,
    });
    updateProduct(id, qty + 1);
  };

  const handleDecrementItem = () => {
    if (qty <= 1) {
      deleteFromCart();
    }

    dispatch({
      type: "DECREMENT_ITEM",
      payload: id,
    });

    updateProduct(id, qty - 1);
  };

  const deleteFromCart = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
    updateProduct(id, 0);
  };

  const getActionTemplate = () => {
    if (soldOut) {
      return (
        <Button theme="disable" className="product__btn">
          Sold out
        </Button>
      );
    }

    if (qty > 0) {
      return (
        <Button
          theme="primary"
          className="product__btn"
          onClick={deleteFromCart}
        >
          Delete
        </Button>
      );
    }

    return (
      <Button theme="primary" className="product__btn" onClick={addToCart}>
        Add to cart
      </Button>
    );
  };

  return (
    <li className="product">
      <img src={imageUrl} className="product__image" alt={name} />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__ingredients">{ingredientsFormatted}</p>
        <div className="product__actions">
          <p className="product__price">${unitPrice}</p>
          <div className="product__actions-order">
            {qty > 0 && (
              <div className="product__counter">
                <Button
                  theme="primary"
                  className="product__counter-btn"
                  onClick={handleDecrementItem}
                >
                  -
                </Button>
                <span className="product__counter-label">{qty}</span>
                <Button
                  theme="primary"
                  className="product__counter-btn"
                  onClick={handleIncrementItem}
                >
                  +
                </Button>
              </div>
            )}
            {getActionTemplate()}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
