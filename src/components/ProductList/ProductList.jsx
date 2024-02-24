import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

const ProductList = ({ products }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="product__container">
      {showLoader && (
        <div className="product__loading">
          <Loader />
        </div>
      )}

      {!showLoader && (
        <ul className="product__list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
