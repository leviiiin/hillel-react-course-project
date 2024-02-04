/* eslint-disable react/jsx-key */
import "./PizzaItem.css";
import BaseButton from "../BaseButton/BaseButton";

const PizzaItem = ({ data }) => {
  return (
    <li key={data.id} className="pizza">
      <img src={data.imageUrl} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{data.name}</p>
        <p className="pizza__ingredients">{data.ingredients.join(", ")}</p>
        <div className="pizza__actions">
          <p className="pizza__price">${data.unitPrice}</p>
          {!data.soldOut ? (
            <BaseButton text="Add to cart" theme="primary" />
          ) : (
            <BaseButton text="Sold out" theme="disable" />
          )}
        </div>
      </div>
    </li>
  );
};

export default PizzaItem;
