import "./Button.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`button button--${props.theme} ${props.class}`}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
