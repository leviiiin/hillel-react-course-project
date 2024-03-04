import "./Counter.css";
import { Button } from "../index";

const Counter = (props) => {
  const { count, onChange } = props;

  const handleIncrement = () => {
    onChange(count + 1);
  };

  const handleDecrement = () => {
    onChange(count - 1);
  };

  return (
    <div className={`counter ${props.className}`}>
      <Button
        theme="primary"
        className="counter__btn"
        onClick={handleDecrement}
      >
        -
      </Button>
      <p className="counter__label">{count}</p>
      <Button
        theme="primary"
        className="counter__btn"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;