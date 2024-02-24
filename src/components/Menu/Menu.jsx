import "./Menu.css";
import ProductList from "../ProductList/ProductList";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import wait from "../../utils/wait";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(true);
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
        const { data } = await response.json();

        setProducts(data);
      } catch (error) {
        setError(error.message || "An error has occurred");
      } finally {
        await wait(2300);
        isLoading(false);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="menu__loading">
        <Loader />
      </div>
    );
  }

  return (
    <div className="menu__container">
      {!loading && <ProductList products={products} />}
    </div>
  );
};

export default Menu;
