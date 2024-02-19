import "./Counter.css";
import Button from "../Button/Button";
import { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState(1);

  const handleIncrement = () => {
    setState((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setState((prevState) => prevState - 1);
  };


  if (state < 1) {
    return <></>;
  } else {
    return (
      <div className={`counter ${props.className}`}>
        <Button
          theme="primary"
          className="counter__btn"
          onClick={handleDecrement}
        >
          -
        </Button>
        <h1 className="counter__label">{state}</h1>
        <Button
          theme="primary"
          className="counter__btn"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    );
  }
};

export default Counter;
