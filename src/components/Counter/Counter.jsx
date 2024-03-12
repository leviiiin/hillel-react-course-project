import "./Counter.css";
import { useReducer, useEffect } from "react";
import { Button } from "../index";

const Counter = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "set":
        return action.payload;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, props.count);

  useEffect(() => {
    props.onChange(state);
  }, [state, props.onChange]);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    dispatch({ type: "set", payload: newValue });
  };

  return (
    <div className={`counter ${props.className}`}>
      <Button
        theme="primary"
        className="counter__btn"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
      <input
        type="number"
        value={state}
        className="counter__label"
        onChange={handleInputChange}
      />
      <Button
        theme="primary"
        className="counter__btn"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
