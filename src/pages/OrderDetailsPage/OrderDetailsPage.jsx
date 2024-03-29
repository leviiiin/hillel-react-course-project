import "./OrderDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Loader, Tag } from "../../components/index";
import formatDate from "../../utils/formatDate";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPriority, setIsPriority] = useState(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `https://react-fast-pizza-api.onrender.com/api/order/${id}`
        );
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setOrderData(data.data);
          setIsPriority(data.data.priority);
        } else {
          throw new Error("Failed to fetch order details");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!orderData) {
    return (
      <div className="order-details__error-message">Error: Order not found</div>
    );
  }

  const handlePriority = async () => {
    try {
      const response = await fetch(
        `https://react-fast-pizza-api.onrender.com/api/order/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            priority: !isPriority,
          }),
        }
      );

      if (response.ok) {
        setIsPriority(!isPriority);
        const data = await response.json();
        if (data.data && data.data.priority !== undefined) {
          setOrderData((prevOrderData) => ({
            ...prevOrderData,
            priority: data.data.priority,
          }));
        } else {
          throw new Error("Failed to update priority: invalid response");
        }
      } else {
        throw new Error("Failed to update priority");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="order-details">
      <div className="order-details__header">
        <h1 className="order-details__title">
          Order #{orderData.id} status: {orderData.status}
        </h1>
        <div className="order-details__tags">
          {isPriority && <Tag color="red">priority</Tag>}
          {orderData.status && (
            <Tag color="green">{orderData.status} order</Tag>
          )}
        </div>
      </div>
      <div className="order-details__time">
        <p className="order-details__time-left">
          Only 10 minutes left {String.fromCodePoint(0x1f600)}
        </p>
        <p className="order-details__order-time">
          {`(Estimated delivery: ${formatDate(orderData.estimatedDelivery)})`}
        </p>
      </div>
      <div className="order-details__product-list">
        {orderData.cart.map((product, index) => (
          <div key={index} className="order-details__product">
            <p className="order-details__product-title">
              {product.quantity}x {product.name}
            </p>
            <p className="order-details__product-price">{`$${product.unitPrice}`}</p>
          </div>
        ))}
      </div>
      <div className="order-details__price">
        <p className="order-details__product-total-price">
          Price product: ${orderData.orderPrice}
        </p>
        {isPriority && (
          <p className="order-details__priority-price">Price priority: $8</p>
        )}
        <p className="order-details__total-price">
          To pay on delivery: $
          {isPriority ? orderData.orderPrice + 8 : orderData.orderPrice}
        </p>
      </div>
      <div className="order-details__btns">
        {!isPriority && (
          <Button
            theme="primary"
            className="order-details__prioritize-btn"
            onClick={handlePriority}
          >
            prioritize
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
