import "./BaseButton.css";

const BaseButton = (props) => {
  return <button className={`button ${props.theme}`}>{props.text}</button>;
};

export default BaseButton;
