import "./LoginForm.css";
import Input from "../BaseInput/BaseInput";
import Button from "../BaseButton/BaseButton";

const LoginForm = () => {
  return (
    <form className="login-form">
      <Input placeholder="Your full name" />
      <Button theme="primary">Login</Button>
    </form>
  );
};

export default LoginForm;
