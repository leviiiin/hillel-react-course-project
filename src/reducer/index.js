/* eslint-disable no-case-declarations */
import { calcTotalItems, calcTotalPrice } from "../utils/utils";

export const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const isExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!isExist) {
        const newStateItems = [...state.items, { ...action.payload, qty: 1 }];

        return {
          items: newStateItems,
          totalItems: calcTotalItems(newStateItems),
          totalPrice: calcTotalPrice(newStateItems),
        };
      } else {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        });

        return {
          items: updatedItems,
          totalItems: calcTotalItems(updatedItems),
          totalPrice: calcTotalPrice(updatedItems),
        };
      }

    case "DELETE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return {
        items: filteredItems,
        totalItems: calcTotalItems(filteredItems),
        totalPrice: calcTotalPrice(filteredItems),
      };

    case "INCREMENT_ITEM":
      const incrementItems = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });

      return {
        items: incrementItems,
        totalItems: calcTotalItems(incrementItems),
        totalPrice: calcTotalPrice(incrementItems),
      };

    case "DECREMENT_ITEM":
      const decremetItems = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      });

      return {
        items: decremetItems,
        totalItems: calcTotalItems(decremetItems),
        totalPrice: calcTotalPrice(decremetItems),
      };

    default:
      return state;
  }
};