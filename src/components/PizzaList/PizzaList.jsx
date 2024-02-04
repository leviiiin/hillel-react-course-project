/* eslint-disable react/jsx-key */
import "./PizzaList.css";
import PizzaItem from "../PizzaItem/PizzaItem";

const PizzaList = ({pizzas}) => {
  return (
    <ul className="pizza__list">
      {pizzas.map(pizza => (<PizzaItem data={pizza}/>))}
    </ul>
  );
};

export default PizzaList;
