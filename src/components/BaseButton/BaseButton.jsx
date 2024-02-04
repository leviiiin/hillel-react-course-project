import "./BaseButton.css";

const BaseButton = (props) => {
  return <button type="button" className={`button button--${props.theme}`}>{props.text}</button>;
};

export default BaseButton;
