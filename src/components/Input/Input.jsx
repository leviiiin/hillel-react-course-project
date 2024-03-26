import "./Input.css";
import { useController } from "react-hook-form";

const Input = ({
  type = "text",
  name,
  placeholder,
  className = "",
  control,
  rules,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <input
      type={type}
      {...field}
      placeholder={placeholder}
      className={`input ${className} ${error ? "error" : ""}`}
    />
  );
};

export default Input;
