import "./ProductItem.css";
import BaseButton from "../BaseButton/BaseButton";

const ProductItem = ({ product }) => {
  const { id, imageUrl, name, ingredients, unitPrice, soldOut } = product;

  const ingredientsFormatted = ingredients.join(", ");
  return (
    <li key={id} className="product">
      <img src={imageUrl} className="product__image" />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__ingredients">{ingredientsFormatted}</p>
        <div className="product__actions">
          <p className="product__price">${unitPrice}</p>
          {!soldOut ? (
            <BaseButton text="Add to cart" theme="primary" />
          ) : (
            <BaseButton text="Sold out" theme="disable" />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
