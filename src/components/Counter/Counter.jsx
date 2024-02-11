import "./Counter.css";
import Button from "../Button/Button";
import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const handleIncrement = () => {
    setState((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setState((prevState) => prevState - 1);
  };

  const handleClear = () => {
    setState(0);
  };

  return (
    <div className="counter">
      <h1 className="counter__label">
        Count: <mark>{state}</mark>
      </h1>
      <Button
        theme="primary"
        className="counter__btn-decrement"
        click={handleDecrement}
      >
        -
      </Button>
      <Button
        theme="primary"
        className="counter__btn-reset"
        click={handleClear}
      >
        Clear
      </Button>
      <Button
        theme="primary"
        className="counter__btn-increment"
        click={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
