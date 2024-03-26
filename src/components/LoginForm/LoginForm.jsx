import { useState } from "react";
import "./LoginForm.css";
import { Button, Form } from "../index";
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
    <>
      <Form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input form__input"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input form__input"
          value={formData.password}
          onChange={handleInputChange}
        />
        {error && <p className="error-message">{error}</p>}
        <Button type="submit" theme="primary" className="form__button">
          Login
        </Button>
        <div>
          Don&apos;t have an account?
          <Link className="form__link" to="/signup">
            Sign Up
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
