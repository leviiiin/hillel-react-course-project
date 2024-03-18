import "./OrderPage.css";
import { OrderForm } from "../../components";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const totalPrice = location.state ? location.state.totalPrice : 0;

  return (
    <div className="order-page">
      <OrderForm price={totalPrice} />
    </div>
  );
};

export default OrderPage;
