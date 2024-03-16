import "./Button.css";

const Button = (props) => {
  const { type = "button", onClick, className, theme, disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${theme} ${className}`}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
