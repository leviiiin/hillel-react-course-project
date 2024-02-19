import "./Button.css";

const Button = (props) => {
  return <button type="button" onClick={props.onClick} className={`button button--${props.theme} ${props.className}`}>{props.children}</button>;
};

export default Button;
