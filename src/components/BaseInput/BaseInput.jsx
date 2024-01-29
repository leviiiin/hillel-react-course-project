import PropTypes from "prop-types";
import './BaseInput.css';

const BaseInput = (props) => {
  return (
    <input placeholder={props.placeholder}/>
  );
};

BaseInput.propTypes = {
  placeholder: PropTypes.string
};


export default BaseInput;
