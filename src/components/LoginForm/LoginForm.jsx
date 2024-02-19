import "./LoginForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = () => {
  return (
    <form className="login-form">
      <Input placeholder="Your full name" />
      <Button theme="primary">Login</Button>
    </form>
  );
};

export default LoginForm;
