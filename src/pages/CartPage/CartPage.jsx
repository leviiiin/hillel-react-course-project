import "./CartPage.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { CartContext } from "../../contexts/CartProvider";
import { useContext } from "react";

const CartPage = () => {
  const { dispatch, state } = useContext(CartContext);
  const navigate = useNavigate();

  const handleDeleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  const handleIncrementItem = (id) => {
    dispatch({
      type: "INCREMENT_ITEM",
      payload: id,
    });
  };

  const handleDecrementItem = (id) => {
    const item = state.items.find((item) => item.id === id);
    if (item.qty <= 1) {
      handleDeleteItem(id);
    } else {
      dispatch({
        type: "DECREMENT_ITEM",
        payload: id,
      });
    }
  };

  const clearCart = () => {
    state.items.forEach((item) => {
      dispatch({
        type: "DELETE_ITEM",
        payload: item.id,
      });
    });
  };

  const orderProduct = () => {
    const currentTotalPrice = state.totalPrice;
    navigate("/order", { state: { totalPrice: currentTotalPrice } });
    clearCart();
  };

  return (
    <div className="cart-page">
      <div className="wrapper">
        <div className="cart-page__content">
          <>
            <Link to="/menu" className="cart-page__back-link">
              <i className="bi bi-arrow-left-short"></i>
              <p>Back to menu</p>
            </Link>
            <h1 className="cart-page__title">Your cart</h1>
          </>
          <div className="cart-page__order">
            <ul className="cart-page__order-list">
              {state.items.map((item) => {
                return (
                  <li key={item.key} className="cart-page__order-item">
                    {item.qty}&times; {item.name}
                    <div>
                      <p>${item.unitPrice}</p>
                      <div className="cart-page__order-counter">
                        <Button
                          theme="primary"
                          className="cart-page__order-counter-btn"
                          onClick={() => handleDecrementItem(item.id)}
                        >
                          -
                        </Button>
                        <span className="cart-page__order-counter-label">
                          {item.qty}
                        </span>
                        <Button
                          theme="primary"
                          className="cart-page__order-counter-btn"
                          onClick={() => handleIncrementItem(item.id)}
                        >
                          +
                        </Button>
                        <Button
                          theme="primary"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {state.totalPrice > 0 && (
              <div className="cart-page__order-price">
                <p>Order price: ${state.totalPrice}</p>
              </div>
            )}
            {state.items.length > 0 && (
              <div className="cart-page__order-btns">
                <Button theme="primary" onClick={orderProduct}>
                  Order
                </Button>
                <Button theme="ghost" onClick={clearCart}>
                  Clear cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
