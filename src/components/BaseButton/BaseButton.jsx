import PropTypes from "prop-types";
import "./BaseButton.css";

const BaseButton = (props) => {
  return <button className={`button ${props.theme}`}>{props.children}</button>;
};

BaseButton.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
};

BaseButton.defaultProps = {
  theme: "",
};

export default BaseButton;
