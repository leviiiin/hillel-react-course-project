import "./Menu.css";
import ProductList from "../ProductList/ProductList";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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

        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 2300);
      } catch (error) {
        setError(error.message || "An error has occurred");
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="menu__container">
      {loading && (
        <div className="menu__loading">
          <Loader />
        </div>
      )}

      {!loading && <ProductList products={products} />}
    </div>
  );
};

export default Menu;
