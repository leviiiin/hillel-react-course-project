import "./PizzaList.css";
import PizzaItem from "../PizzaItem/PizzaItem";

const PizzaList = () => {
  return (
    <ul className="pizza__list">
      <PizzaItem />
    </ul>
  );
};

export default PizzaList;
