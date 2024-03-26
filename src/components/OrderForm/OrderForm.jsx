import "./OrderForm.css";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OrderForm = ({ price }) => {
  const navigateTo = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    navigateTo("/");
  };

  return (
    <>
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="order-form__title">Ready to order? Let`s go!</h1>
        <div className="order-form__row">
          <p className="order-form__input-title">First Name</p>
          <div>
            <Input
              name="name"
              control={control}
              rules={{
                required: "Address is required!",
              }}
              className={`order-form__input ${errors.name && `error`}`}
            />
            {errors.name && (
              <p className="order-form__error">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="order-form__row">
          <p className="order-form__input-title">Phone number</p>
          <div>
            <Input
              name="phone"
              control={control}
              type="number"
              className={`order-form__input ${errors.phone && `error`}`}
              rules={{
                required: "Phone number is required!",
                pattern: {
                  value: /^(?:(?:\+?38)?0|380)\d{9}$/,
                  message: "Invalid phone number format!",
                },
              }}
            />
            {errors.phone && (
              <p className="order-form__error">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="order-form__row">
          <p className="order-form__input-title">Address</p>
          <div>
            <Input
              name="address"
              control={control}
              className={`order-form__input ${errors.address && `error`}`}
              rules={{
                required: "Address is required!",
                pattern: {
                  value: /^[a-zA-Zа-яА-Я]+\s\d+$/,
                  message: "Invalid address format. Example: Street 1",
                },
              }}
            />
            {errors.address && (
              <p className="order-form__error">{errors.address.message}</p>
            )}
          </div>
        </div>
        <div className="order-form__row">
          <p className="order-form__input-title"></p>
          <label className="order-form__label">
            <input type="checkbox" className="order-form__checkbox" />
            Want to give your order priority?
          </label>
        </div>
        <Button type="submit" theme={"primary"} className="order-form__btn">
          Order now for ${price}
        </Button>
      </form>
    </>
  );
};

export default OrderForm;
