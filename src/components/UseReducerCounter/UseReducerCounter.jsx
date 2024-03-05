import { useReducer } from "react";
import { Button } from "../index";
import "./UseReducerCounter.css";

function UseReducerCounter() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw state;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="reduce-counter">
      <p className="reduce-counter__label">Count: {state}</p>
      <div>
        <Button
          theme="primary"
          className="reduce-counter__btn"
          onClick={handleDecrement}
        >
          -
        </Button>
        <Button
          theme="primary"
          className="reduce-counter__btn"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          theme="primary"
          className="reduce-counter__btn"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default UseReducerCounter;
