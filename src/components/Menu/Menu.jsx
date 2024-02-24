import "./Menu.css";
import ProductList from "../ProductList/ProductList";
import { useEffect, useState } from "react";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        const {data} = await response.json();

        setProducts(data);
      } catch (error) {
        setError(error.message || "An error has occurred");
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ProductList products={products} />;
};

export default Menu;
