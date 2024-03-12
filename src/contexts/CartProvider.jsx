import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/index";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
