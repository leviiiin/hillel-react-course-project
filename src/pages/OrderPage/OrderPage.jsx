import { useState } from "react";
import "./OrderPage.css";
import { OrderForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const cartData = location.state || {};

  const createOrder = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const orderData = {
        address: formData.address,
        customer: formData.name,
        phone: formData.phone,
        priority: formData.priority,
        position: "",
        cart: cartData.cart,
      };

      const response = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const { status, data: responseData } = data;
        if (status === "success") {
          navigate(`/order/${responseData.id}`, {
            state: { orderData: responseData },
          });
        } else {
          throw new Error(
            "Something went wrong with the order. Please try again later."
          );
        }
      } else {
        throw new Error(
          "Something went wrong with the server. Please try again later."
        );
      }
    } catch (error) {
      setError(
        error.message || "Something went wrong. Please try again later."
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="order-page">
      {error && <div className="error-message">{error}</div>}
      <OrderForm
        onSubmit={createOrder}
        isLoading={isLoading}
        cartData={cartData}
      />
    </div>
  );
};

export default OrderPage;
