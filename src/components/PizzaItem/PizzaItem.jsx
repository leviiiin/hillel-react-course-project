/* eslint-disable react/jsx-key */
import "./PizzaItem.css";
import BaseButton from "../BaseButton/BaseButton";
import pizzas from "../../../public/data";

const PizzaItem = () => {
  return (
    <>
      {pizzas.map((pizza) => (
        <li key={pizza.id} className="pizza">
          <img src={pizza.imageUrl} className="pizza__image" />
          <div className="pizza__info">
            <p className="pizza__name">{pizza.name}</p>
            <p className="pizza__ingredients">{pizza.ingredients.join(", ")}</p>
            <div className="pizza__actions">
              <p className="pizza__price">${pizza.unitPrice}</p>
              {!pizza.soldOut ? (
                <BaseButton text="Add to cart" theme="primary" />
              ) : (
                <BaseButton text="Sold out" theme="disable" />
              )}
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default PizzaItem;
