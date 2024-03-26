import "./MenuPage.css";
import ProductList from "../../components/ProductList/ProductList";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState, useContext } from "react";
import wait from "../../utils/wait";
import { CartContext } from "../../contexts/CartProvider";

const MenuPage = () => {
  const { state, dispatch } = useContext(CartContext);
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
        await wait(1000);
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

  const updateProduct = (productId, newQty) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          qty: newQty,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className="menu-page__container">
      {!loading && (
        <ProductList
          products={products}
          updateProduct={updateProduct}
          state={state}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default MenuPage;
