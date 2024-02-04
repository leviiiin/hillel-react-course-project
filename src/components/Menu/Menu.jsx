import "./Menu.css";
import PizzaList from "../PizzaList/PizzaList";
import pizzas from "../../../public/data";

const Menu = () => {
  return <PizzaList pizzas={pizzas} />;
};

export default Menu;
