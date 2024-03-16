import "./Input.css";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  onBlur,
  onKeyDown
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`input ${className}`}
    />
  );
};

export default Input;
