import "./Menu.css";
import ProductList from "../ProductList/ProductList";
import pizzas from "../../../public/data";

const Menu = () => {
  return <ProductList pizzas={pizzas} />;
};

export default Menu;
