import "./LoginForm.css";
import { Input, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    navigate("/menu");
  };

  return (
    <form className="login-form">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        className="login-form__input"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        className="login-form__input"
        value={formData.password}
        onChange={handleInputChange}
      />
      {error && <p className="error-message">{error}</p>}
      <Button
        theme="primary"
        className="login-form__button"
        onClick={handleLogin}
      >
        Login
      </Button>
      <div className="signup-link__container">
        Don`t have an account?
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
