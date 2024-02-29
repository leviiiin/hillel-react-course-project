import "./Button.css";

const Button = (props) => {
  const { type = "button", onClick, className, theme } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${theme} ${className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
